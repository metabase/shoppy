#!/bin/bash

if [ -z "$SHOPPY_METABASE_INSTANCE_API_KEY" ]; then
  echo "Define SHOPPY_METABASE_INSTANCE_API_KEY value in your environment"
  exit 1
fi

curl -X POST \
  -H "x-api-key: $SHOPPY_METABASE_INSTANCE_API_KEY" \
  "https://shoppy.coredev.metabase.com/api/ee/serialization/export?data_model=false&dirname=metabase_data" \
  -o metabase_data.tar.gz

tar -xzf metabase_data.tar.gz

find metabase_data -type f -name "export.log" -delete

# Find all directories ending with '_user_generated' and process them
find metabase_data/collections -type d -name "*_user_generated" | while IFS= read -r dir; do
  # Recursively delete all nested directories inside the '_user_generated' directory
  find "$dir" -mindepth 1 -type d -exec rm -rf {} +

  # Make sure to preserve files ending with '_user_generated.yaml'
  find "$dir" -type f ! -name "*_user_generated.yaml" -exec rm -f {} +
done

tar -czf metabase_data.tar.gz metabase_data
rm -rf metabase_data
