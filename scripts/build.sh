#!/bin/bash
# Builds the app for production from CLI for humans and AI agents.
# Usage: ./scripts/build.sh
set -euo pipefail

echo "Building application..."
npm run build

echo "Build completed successfully"
