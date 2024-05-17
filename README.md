# Customer Zero: Embedding SDK demo application

## How to run the demo

This demo uses the data from the hosted Metabase Cloud instance and provides a hosted JWT server, therefore you do not need to run the Metabase server and JWT server locally.

- Create local environment files.

  - `cp .env.example .env`

- Install the required dependencies.

  - `yarn`

- Run the React frontend.

  - `yarn start`

## What if I want to run the backend locally?

Note that you don't usually need to run this locally, unless you are debugging the JWT auth server.

- Update the API server's environment variables in `api/.env`. If you are a Metabase employee, refer to the "Customer Zero - Environment File" item on the 1Password vault.
- Run the API server
  `cd api && yarn && yarn dev`
