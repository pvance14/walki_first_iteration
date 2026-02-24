#!/bin/bash
# Runs unit tests from CLI for humans and AI agents.
# Usage: ./scripts/test.sh
set -euo pipefail

# Optional local test environment variables (not committed).
if [ -f .testEnvVars ]; then
  # shellcheck disable=SC1091
  source .testEnvVars
fi

echo "Running tests..."
npm run test:run

echo "Running integration tests..."
# TODO: Replace this placeholder when a dedicated integration test command exists (e.g. npm run test:integration).
echo "No integration test command configured yet."

echo "All tests passed"
