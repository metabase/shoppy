# syntax=docker.io/docker/dockerfile:1.7-labs

FROM node:22-bullseye AS runner

ENV NODE_OPTIONS="--max-old-space-size=4096"

ARG VITE_APP_PR_NUMBER
ENV VITE_APP_PR_NUMBER=${VITE_APP_PR_NUMBER}

ARG VITE_APP_METABASE_INSTANCE_URL
ENV VITE_APP_METABASE_INSTANCE_URL=${VITE_APP_METABASE_INSTANCE_URL}

ARG VITE_APP_BACKEND_URL
ENV VITE_APP_BACKEND_URL=${VITE_APP_BACKEND_URL}

ARG VITE_DATADOG_APPLICATION_ID
ENV VITE_DATADOG_APPLICATION_ID=${VITE_DATADOG_APPLICATION_ID}

ARG VITE_DATADOG_CLIENT_TOKEN
ENV VITE_DATADOG_CLIENT_TOKEN=${VITE_DATADOG_CLIENT_TOKEN}

ARG VITE_DATADOG_SITE
ENV VITE_DATADOG_SITE=${VITE_DATADOG_SITE}

ARG VITE_DATADOG_SERVICE
ENV VITE_DATADOG_SERVICE=${VITE_DATADOG_SERVICE}

ARG VITE_DATADOG_ENV
ENV VITE_DATADOG_ENV=${VITE_DATADOG_ENV}

ARG WATCH=false
ENV WATCH=${WATCH}

WORKDIR /app

# Copy package files first (changes less frequently)
COPY package.json yarn.lock ./

# Install dependencies (cached unless package files change)
RUN yarn --frozen-lockfile

# Copy source code last (changes most frequently)
COPY --exclude=./api --exclude=./metabase . .

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
