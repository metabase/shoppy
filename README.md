# embedding-sdk-customer-zero
Check [this article](https://www.notion.so/metabase/WIP-Embedding-SDK-8103306366be4f0786b489ad2324235c#7ea6f8f77d8448ff9d55af58f9e2d45e) for more information about Embedding SDK.


### Setup

#### In the [main metabase repo](https://github.com/metabase/metabase)

1. Run Metabase instance from the main repo -

    `yarn dev-ee` 

2. Navigate to the [admin site](http://localhost:3000/admin/settings/embedding-in-other-applications), enable embedding and set `AUTHORIZED ORIGINS` value in Interactive embedding settings to `http://localhost:3004`
3. [Generate API key](http://localhost:3000/admin/settings/authentication/api-keys) to authorize API requests from the SDK.

#### In this repo

1. Create a local env: 

   `cp .env.example .env`

2. Add your API key to `.env` as `REACT_APP_API_KEY=XXXXX`
3. Generate personal [Github access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) with `read:packages` scope. It is needed to access privately hosted `@metabase/embedding-sdk-react` package.
4. Add Github token be available as `NPM_TOKEN` env var - e.g. your bash profile, or WebStorm run configuration 
5. Install dependencies:

   `yarn install-deps`

6. Run this app:
   
   `yarn start`
