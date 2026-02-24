#!/bin/bash
# Runs the production preview server from CLI for humans and AI agents.
# Usage: ./scripts/run.sh
set -euo pipefail

echo "Starting production preview server..."
npm run preview
