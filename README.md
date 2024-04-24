# Customer Zero: Embedding SDK demo application

## How to run the demo

This demo uses the data from the hosted Metabase Cloud instance, therefore you do not need to run the Metabase server locally.

- Create local environment files.

  - `cp .env.example .env && cd api && cp .env.example .env`

- Update the API server's environment variables in `api/.env`.

  - Update the `METABASE_JWT_SHARED_SECRET` to match the JWT signing key [configured in the Metabase Cloud instance](https://customer-zero.hosted.staging.metabase.com/admin/settings/authentication/jwt).
  - Update the `SESSION_SECRET` to a random string.

- Generate a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) with the `read:packages` scope. This is needed to access the privately hosted `@metabase/embedding-sdk-react` package.

- Add the generated GitHub access token to your `NPM_TOKEN` environment variable, e.g. via your bash profile, or WebStorm run configuration.

- Install the required dependencies.

  - `yarn install && cd api && yarn install`

- Run the API server and the React frontend.

  - `cd api && yarn dev`
  - `yarn start`
