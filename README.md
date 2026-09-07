# Shoppy: Embedding SDK demo application

Shoppy is a demo application that showcases the capabilities of Metabase's React Embedding SDK. It is a simple e-commerce dashboard that allows shop owers to view and analyze sales data.

The demo is available at [https://embedded-analytics-sdk-demo.metabase.com](https://embedded-analytics-sdk-demo.metabase.com).

## How to run the demo on your machine

This demo uses the data from the hosted Metabase Cloud instance and provides a hosted JWT server, therefore you do not need to run the Metabase server and JWT server locally.

- Create local environment files.

  - `cp .env.example .env`

- Install the required dependencies.

  - `yarn`

- Run the React frontend.

  - `yarn dev`

- Disable CORS in your browser. You can find how to do it here [https://medium.com/@beligh.hamdi/run-chrome-browser-without-cors-872747142c61](https://medium.com/@beligh.hamdi/run-chrome-browser-without-cors-872747142c61); also you can use a browser extension.

- Visit `http://localhost:3004` in your browser.

## How to develop the SDK locally?

> [!IMPORTANT]  
> The following sections are for Metabase employees who are working on the embedding SDK.
> If you are not a Metabase employee, you can skip the following sections.

### Using Docker

- Clone `.env.docker.example` to `.env.docker`. Set `MB_INSTANCE_URL` to your Metabase instance and `METABASE_JWT_SHARED_SECRET` to that instance's JWT shared secret.
- Run `yarn docker:up` for a production build, or `WATCH=true yarn docker:up` for a dev build with watch.
  - The command launches the Shoppy DWH, API and Client, pointing at the configured Metabase instance.
  - Visit `http://localhost:4400`.
- To stop containers run `yarn docker:down`.
- To remove containers and images completely run `yarn docker:rm`.

### Using an existing running MB instance

- Place the metabase repository in `../metabase`

- Open a new terminal and run `yarn build-release:cljs && yarn build-embedding-sdk:watch` in the metabase repository. This watches for changes and builds the embedding SDK in development mode.

- Re-run the following command every time you make changes to the embedding SDK's source. This re-links the built SDK to the demo application.

  - `yarn dev:link && yarn dev`

### How to run the demo against a local JWT auth server?

If you cannot use the hosted JWT server, you can run the JWT server locally.

- Update the API server's environment variables in `api/.env`. If you are a Metabase employee, refer to the "Shoppy - Environment File" item on the 1Password vault.

- Run the API server.

  - `cd api && yarn && yarn dev`

- Run the React frontend.

  - `yarn dev:link && yarn dev`

### Running e2e tests (For Metabase developers)

The e2e tests run the client, api and warehouse locally (via Docker) against the production Metabase instance, and drive the local client with Cypress.

- In `.env.docker`, set `METABASE_JWT_SHARED_SECRET` to the production instance's JWT shared secret (from 1Password) so the api's SSO tokens are trusted, and `MB_INSTANCE_URL` to that instance.
- Start the stack: `yarn docker:e2e:up --wait`.
- Run the tests: `cd e2e && yarn cypress:run` (headless) or `yarn cypress:open` (Cypress UI).
- Stop the stack: `yarn docker:down`.

CI runs the same suite in `.github/workflows/e2e-tests.yml`, injecting the production secret from the `SHOPPY_PROD_JWT_SHARED_SECRET` GitHub secret.
