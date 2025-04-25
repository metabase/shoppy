#!/bin/bash
set -e

DUMP=./app/metabase_dump.sql

echo "Restoring MB App DB from dump...";

METABASE_APP_DB_URL="postgres://${MB_DB_USER}:${MB_DB_PASS}@${MB_DB_HOST}:${MB_DB_PORT}/${MB_DB_DBNAME}"
METABASE_APP_DB_DUMP_TYPE=$(file --brief --mime-type "$DUMP")

case "$METABASE_APP_DB_DUMP_TYPE" in
  application/x-tar|application/octet-stream)
    echo "Custom　or directory‑format archive → pg_restore"
    pg_restore -d "$METABASE_APP_DB_URL" "$DUMP" --no-owner > /dev/null
    ;;
  text/plain)
    echo "Plain text SQL → psql"
    psql "$METABASE_APP_DB_URL" -f "$DUMP" --quiet
    ;;
  *)
    echo "Unknown dump format..."
    ;;
esac

./app/run_metabase.sh "$@" &
SERVER_PID=$!

until curl -s http://metabase:${MB_JETTY_PORT}/api/health | grep -q "\"status\":\"ok\""; do
  echo "Waiting for the Metabase to be healthy..."
  sleep 2
done

echo "Metabase is healthy. Running additional configuration..."

wait $SERVER_PID
