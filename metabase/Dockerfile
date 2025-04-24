FROM metabase/metabase-enterprise:v1.54.x

COPY ./metabase /app/
COPY ./local-dist /app/local-dist

RUN if [ -f ./app/local-dist/metabase.jar ]; then \
      echo "Local metabase.jar is found in ./app/local-dist, running it..."; \
      cp ./app/local-dist/metabase.jar /app/metabase.jar; \
    else \
      echo "Local metabase.jar is not found in ./app/local-dist, skipping copy"; \
    fi

RUN if [ -f ./app/local-dist/metabase_dump.sql ]; then \
      echo "Local metabase_dump.sql is found in ./app/local-dist, copying it..."; \
      cp ./app/local-dist/metabase_dump.sql /app/metabase_dump.sql; \
    else \
      echo "Local metabase_dump.sql is not found in ./app/local-dist, skipping copy"; \
    fi

RUN chmod +x /app/entrypoint.sh

RUN apk update \
    && apk add --no-cache postgresql-client file \
    && rm -rf /var/cache/apk/*

ENTRYPOINT ["/app/entrypoint.sh"]
