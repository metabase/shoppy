#!/bin/bash

if [ -z "$SHOPPY_METABASE_INSTANCE_API_KEY" ]; then
  echo "Define SHOPPY_METABASE_INSTANCE_API_KEY value in your environment"
  exit 1
fi

curl -X POST \
  -H "x-api-key: $SHOPPY_METABASE_INSTANCE_API_KEY" \
  -F file=@./metabase_data.tar.gz \
  "https://shoppy.coredev.metabase.com/api/ee/serialization/import"