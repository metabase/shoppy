# syntax=docker.io/docker/dockerfile:1.7-labs

FROM node:22-bullseye AS runner

WORKDIR /app

COPY --exclude=./api . .

RUN yarn --frozen-lockfile

RUN if [ -d "./local-dist/embedding-sdk" ]; then \
      echo "Local embedding-sdk dist is found in ./local-dist/embedding-sdk, installing it..."; \
      yarn add file:./local-dist/embedding-sdk; \
    else \
      echo "Local embedding-sdk dist is not found in ./local-dist/embedding-sdk, skipping copy"; \
    fi

CMD ["yarn", "dev", "--host"]
