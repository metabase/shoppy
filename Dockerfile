# syntax=docker.io/docker/dockerfile:1.7-labs

FROM node:22-bullseye AS runner

ENV NODE_OPTIONS="--max-old-space-size=4096"

ARG VITE_APP_METABASE_INSTANCE_URL
ENV VITE_APP_METABASE_INSTANCE_URL=${VITE_APP_METABASE_INSTANCE_URL}

ARG VITE_APP_API_HOST
ENV VITE_APP_API_HOST=${VITE_APP_API_HOST}


ARG WATCH=false
ENV WATCH=${WATCH}

WORKDIR /app

COPY --exclude=./api --exclude=./metabase . .

RUN yarn --frozen-lockfile

RUN if [ -d "./local-dist/embedding-sdk" ]; then \
      echo "Local embedding-sdk dist is found in ./local-dist/embedding-sdk, installing it..."; \
      yarn add file:./local-dist/embedding-sdk; \
    else \
      echo "Local embedding-sdk dist is not found in ./local-dist/embedding-sdk, skipping copy"; \
    fi

RUN if [ "$WATCH" != "true" ]; then \
      echo "WATCH env is not set; running production yarn build..."; \
      yarn build; \
    else \
      echo "WATCH env is set; running in development mode..."; \
    fi

ENTRYPOINT ["/app/entrypoint.sh"]
