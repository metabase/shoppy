# Shoppy: Embedding SDK demo application

Shoppy is a demo application that showcases the capabilities of Metabase's React Embedding SDK. It is a simple e-commerce dashboard that allows shop owers to view and analyze sales data.

The demo is available at [https://metabase-shoppy.vercel.app](https://metabase-shoppy.vercel.app).

## How to run the demo on your machine

This demo uses the data from the hosted Metabase Cloud instance and provides a hosted JWT server, therefore you do not need to run the Metabase server and JWT server locally.

- Create local environment files.

  - `cp .env.example .env`

- Install the required dependencies.

  - `yarn`

- Run the React frontend.

  - `yarn dev`

- Visit `http://localhost:3004` in your browser.

## How to develop the SDK locally?

> [!IMPORTANT]  
> The following sections are for Metabase employees who are working on the embedding SDK.
> If you are not a Metabase employee, you can skip the following sections.

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
