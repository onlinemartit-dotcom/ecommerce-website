#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: ./rollback-vercel.sh <project-name> <deployment-url>"
  exit 1
fi

PROJECT="$1"
TARGET="$2"

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "VERCEL_TOKEN is required"
  exit 1
fi

vercel alias set "$TARGET" "$PROJECT" --token="$VERCEL_TOKEN"
echo "Rollback alias updated for $PROJECT -> $TARGET"
