#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is required"
  exit 1
fi

if [[ $# -lt 1 ]]; then
  echo "Usage: ./restore_postgres.sh <backup_file.dump>"
  exit 1
fi

BACKUP_FILE="$1"
pg_restore --clean --if-exists --no-owner --dbname="$DATABASE_URL" "$BACKUP_FILE"
echo "Restore completed from $BACKUP_FILE"
