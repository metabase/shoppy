#!/bin/sh
set -e

# Only run migrations and seeding if the database is empty
PRODUCT_COUNT=$(psql "$DB_URL" -tA -c "SELECT COUNT(*) FROM products;" 2>/dev/null || echo "0")

if [ "$PRODUCT_COUNT" = "0" ]; then
  echo "Database is empty, running migrations and seeding..."
  yarn db:initialize
  echo "Migrations and seeding complete - starting the API server."
else
  echo "Database already seeded ($PRODUCT_COUNT products found), skipping seed - starting the API server."
fi

exec "$@"
