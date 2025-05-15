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

- Visit `http://localhost:3004` in your browser.

## How to develop the SDK locally?

> [!IMPORTANT]  
> The following sections are for Metabase employees who are working on the embedding SDK.
> If you are not a Metabase employee, you can skip the following sections.

### Using an existing running MB instance

- Place the metabase repository in `../metabase`

- Open a new terminal and run `yarn build-release:cljs && yarn build-embedding-sdk:watch` in the metabase repository. This watches for changes and builds the embedding SDK in development mode.

- Re-run the following command every time you make changes to the embedding SDK's source. This re-links the built SDK to the demo application.

  - `yarn dev:link && yarn dev`

### Using Docker

- Clone `.env.docker.example` to `.env.docker` and set the proper `PREMIUM_EMBEDDING_TOKEN` value.
- If you want to test a local Embedding SDK version, copy it to the `local-dist/embedding-sdk` folder.
- Run Docker via `yarn docker:up` for the `production` build or `WATCH=true yarn docker:up` for the development build with the `watch` support.
  - The command launches containers with the local MB instance, Shoppy DWH, Shoppy API and Shoppy Client.
  - Visit `http://localhost:4400`.
- To stop containers run `yarn docker:down`.

### How to run the demo against a local JWT auth server?

If you cannot use the hosted JWT server, you can run the JWT server locally.

- Update the API server's environment variables in `api/.env`. If you are a Metabase employee, refer to the "Shoppy - Environment File" item on the 1Password vault.

- Run the API server.

  - `cd api && yarn && yarn dev`

- Run the React frontend.

  - `yarn dev:link && yarn dev`

### Running e2e tests (For Metabase developers)

To run e2e tests locally, a proper App DB dump of the Shoppy's Metabase Instance must be placed to the `./local-dist/metabase_dump.sql`

You can get it by:
- Enabling the `Tailscale` and logging in using your work email address.
- Running `pg_dump "postgres://{{ username }}:{{ password }}@{{ host }}:{{ port }}/{{ database }}" > ./local-dist/metabase_dump.sql` command.
  - See the `Shoppy Coredev Appdb` record in `1password` for credentials.
