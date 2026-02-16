#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is required"
  exit 1
fi

BACKUP_DIR="${BACKUP_DIR:-./backups}"
mkdir -p "$BACKUP_DIR"
FILE="$BACKUP_DIR/ecommerce_$(date +%Y%m%d_%H%M%S).dump"

pg_dump "$DATABASE_URL" -Fc -f "$FILE"
echo "Backup created at $FILE"
