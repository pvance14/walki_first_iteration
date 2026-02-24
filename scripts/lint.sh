#!/bin/bash
# Runs static checks from CLI for humans and AI agents.
# Usage: ./scripts/lint.sh
set -euo pipefail

echo "Running lint checks..."
# TODO: Replace with npm run lint after an ESLint command is added to package.json.
npm run type-check

echo "Lint checks passed"
