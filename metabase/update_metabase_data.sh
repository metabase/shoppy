#!/bin/bash

if [ -z "$SHOPPY_METABASE_INSTANCE_API_KEY" ]; then
  echo "Define SHOPPY_METABASE_INSTANCE_API_KEY value in your environment"
  exit 1
fi

curl -X POST \
  -H "x-api-key: $SHOPPY_METABASE_INSTANCE_API_KEY" \
  "https://shoppy.hosted.staging.metabase.com/api/ee/serialization/export?data_model=false&dirname=metabase_data" \
  -o metabase_data.tar.gz
