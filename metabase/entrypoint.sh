#!/bin/bash
set -e

./app/run_metabase.sh "$@" &
SERVER_PID=$!

until curl -s http://metabase:${MB_JETTY_PORT}/api/health | grep -q "\"status\":\"ok\""; do
  echo "Waiting for the Metabase to be healthy..."
  sleep 2
done

echo "Metabase is healthy. Running import..."

curl -X POST \
  -H "X-Api-Key: ${METABASE_ADMIN_API_KEY}" \
  -F file=@./app/metabase_data.tar.gz \
  http://metabase:${MB_JETTY_PORT}/api/ee/serialization/import

echo "Import complete. Keeping the server running..."

wait $SERVER_PID
