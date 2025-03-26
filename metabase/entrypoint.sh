#!/bin/bash
set -e

./app/run_metabase.sh "$@" &
SERVER_PID=$!

until curl -s http://metabase:${MB_JETTY_PORT}/api/health | grep -q "\"status\":\"ok\""; do
  echo "Waiting for the Metabase to be healthy..."
  sleep 2
done

echo "Metabase is healthy. Running import..."

SESSION_ID=$(curl -s -X POST \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"${METABASE_ADMIN_EMAIL}\", \"password\": \"${METABASE_ADMIN_PASSWORD}\"}" \
  http://metabase:${MB_JETTY_PORT}/api/session | sed -n 's/.*"id":"\([^"]*\)".*/\1/p')

curl -X POST \
  -H "X-Metabase-Session: $SESSION_ID" \
  -F file=@./app/metabase_data.tar.gz \
  http://metabase:${MB_JETTY_PORT}/api/ee/serialization/import

echo "Import complete. Keeping the server running..."

wait $SERVER_PID
