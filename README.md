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

- Clone `.env.docker.example` to `.env.docker` and set the proper `PREMIUM_EMBEDDING_TOKEN` value.
- Run Docker via `yarn docker:up` for the `production` build or `WATCH=true yarn docker:up` for the development build with the `watch` support.
  - The command launches a local MB instance, the Shoppy DWH, Shoppy API and Shoppy Client. The local Metabase is seeded from the committed serialized data (`./metabase/metabase_data.tar.gz`), so no database dump is needed.
  - Visit `http://localhost:4400`.
- To stop containers run `yarn docker:down`.
- To remove containers and images completely run `yarn docker:rm`.

#### Local development (For Metabase developers)

To run the containers with a locally built `metabase.jar` and/or a locally built Embedding SDK:

- Copy a locally built `metabase.jar` to `./local-dist/metabase.jar`. Without it, the `metabase.jar` from the Docker image is used.
- Copy a locally built Embedding SDK package to `./local-dist/embedding-sdk`. Without it, the `@metabase/embedding-sdk-react` version from `package.json` is used.
- Run `yarn docker:local-dist:up` to start the containers using the local dist from `./local-dist`.
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

The e2e tests run the local Shoppy stack (a local Metabase seeded from the committed serialized data) and drive it with Cypress.

- Clone `.env.docker.example` to `.env.docker` and set the proper `PREMIUM_EMBEDDING_TOKEN` value.
- Run `yarn docker:e2e:up --wait` to start all required containers.
- Run the tests: `cd e2e && yarn cypress:run` (headless) or `cd e2e && yarn cypress:open` (Cypress UI).
- To stop containers run `yarn docker:rm`.

CI runs the same suite in `.github/workflows/e2e-tests.yml`.
