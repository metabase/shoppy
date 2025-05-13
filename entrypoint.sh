#!/bin/bash
set -e

if [ "$WATCH" = "true" ]; then
  yarn dev --host
else
  yarn preview --host
fi
