#!/bin/sh
set -e

yarn db:initialize

echo "Migrations and seeding complete - starting the API server."

exec "$@"