// src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const METABASE_SITE_URL = "http://localhost:3000";
const METABASE_JWT_SHARED_SECRET =
  "3f03c1d17df6489551ecad58af70f0dd3fec49932c7aa01fdf88c83dfcbf33f0";

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3003;

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(
  cors({
    origin: "http://localhost:3004",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

const users: Partial<User>[] = [
  {
    firstName: "Rene",
    lastName: "Mueller",
    email: "rene@example.com",
    accountId: 28,
    accountName: "Customer-Acme",
  },
  {
    firstName: "Cecilia",
    lastName: "Stark",
    email: "cecilia@example.com",
    accountId: 132,
    accountName: "Customer-Fake",
  },
];

const findUserbyEmail = (email: string) => users.find((u) => u.email === email);

type User = {
  email: string;
  firstName: string;
  lastName: string;
  accountId: number;
  accountName: string;
  exp: number;
  salt?: string;
  hash?: string;
}

function authenticate(email: string, pass: string, fn: (erro: Error | undefined, user?: Partial<User> | null) => void) {
  if (!module.parent) {
    console.log("authenticating %s:%s", email, pass);
  }
  var user = findUserbyEmail(email);
  // query the db for the given email
  if (!user) {
    return fn(undefined, null);
  }
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  bcrypt.hash(pass, user?.salt || '', function (err: Error | undefined, hash: string) {
    if (err) {
      return fn(err);
    }
    if (hash === user?.hash) {
      return fn(undefined, user);
    }
    fn(undefined, null);
  });
}

const signUserToken = (user: User) =>
  jwt.sign(
    {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      account_id: user.accountId,
      groups: [user.accountName],
      exp: Math.round(Date.now() / 1000) + 60 * 0.25, // 1.1 minute expiration
    },
    METABASE_JWT_SHARED_SECRET
  );


  app.post("/login", function (req: any, res: any, next: any) {
    authenticate(req.body.email, req.body.password, function (err, user) {
      if (err) {
        return next(err);
      }
      if (user) {
        // Regenerate session when signing in
        // to prevent fixation
        var returnTo = req.session.returnTo;
        req.session.regenerate(function () {
          // Store the user's primary key
          // in the session store to be retrieved,
          // or in this case the entire user object
          req.session.user = user;
          req.session.success =
            "Authenticated as " +
            user.firstName +
            "" +
            user.lastName +
            ' click to <a href="/logout">logout</a>. ' +
            ' click to access <a href="/analytics">analytics</a>';
          delete req.session.returnTo;
  
          res.status(200).json({
            status: "success",
            ...req.session,
          });
        });
      } else {
        res.status(500).json({
          status: "error",
          message:
            "Authentication failed, please check your " +
            " email and password." +
            ' (use "rene@example.com" or "cecilia@example.com" and password "foobar")',
        });
      }
    });
  });
  
  app.get("/sso/metabase", (req: any, res: any) => {
    if (!req.session.user) {
      return res.status(500).json({
        status: "error",
        message: "Not authenticated",
      });
    }
  
    const ssoUrl = new URL("/auth/sso", METABASE_SITE_URL);
    ssoUrl.searchParams.set("jwt", signUserToken(req.session.user));
    ssoUrl.searchParams.set("token", "true");
  
    fetch(ssoUrl, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((tokenData) => {
        console.log(tokenData);
        return res.status(200).json(tokenData);
      })
      .catch((error) =>
        res.status(500).json({
          status: "error",
          message: "Authentication failed",
          error,
        })
      );
  });

  function restrict(req: any, res: any, next: any) {
    if (req.session.user) {
      next();
    } else {
      res
        .status(500)
        .json({
          status: "error",
          message: "Not authenticated",
        })
        .end();
    }
  }
  
  app.get("/current-user", restrict, function (req: any, res: any) {
    res.status(200).json({
      status: "success",
      user: req.session.user,
    });
  });

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
