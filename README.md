# embedding-sdk-customer-zero

### Setup

In the main metabase repo:

Build Embedding SDK:

`yarn build`

`yarn build-embedding-sdk` or `yarn build-embedding-sdk:watch`

Run Metabase instance:

`yarn dev-ee` 

Setup local env:

`cp .env.example .env`

add your API key as `REACT_APP_API_KEY=XXXXX`

Link embedding sdk package. Add 
```
"metabase-embedding-sdk": "file:../<PATH_TO_MAIN_METABASE_CODE>/resources/embedding-sdk",
```

Run this app:

`yarn start`  


You can check https://www.notion.so/metabase/WIP-Embedding-SDK-8103306366be4f0786b489ad2324235c#7ea6f8f77d8448ff9d55af58f9e2d45e for the full guide.

