#!/bin/bash

mode="fix"

filters=()

for arg in "$@"; do
  case $arg in
  --for=*)
    mode="${arg#--for=}"
    ;;
  --filter=*)
    filterArg="${arg#--filter=}"
    IFS=',' read -ra userFilters <<<"$filterArg"
    for monorepo in "${userFilters[@]}"; do
      filters+=(--filter "$monorepo")
    done
    ;;
  esac
done

echo "Started (mode: $mode)"

if [[ "$mode" == "ci" ]]; then
  pnpm "${filters[@]}" --silent format:check --log-level silent >/dev/null 2>&1
  echo "Prettier Verified"

  pnpm "${filters[@]}" --silent lint >/dev/null 2>&1
  echo "ESLint Verified"

  pnpm "${filters[@]}" --silent typecheck >/dev/null 2>&1
  echo "TypeScript Verified"

elif [[ "$mode" == "check" ]]; then
  pnpm "${filters[@]}" --silent format:check --log-level silent
  echo "Prettier Checked"

  pnpm "${filters[@]}" --silent lint
  echo "ESLint Checked"

  pnpm "${filters[@]}" --silent typecheck
  echo "TypeScript Checked"

else
  pnpm "${filters[@]}" --silent format:fix --log-level silent
  echo "Prettier Completed"

  pnpm "${filters[@]}" --silent lint:fix
  echo "ESLint Completed"

  pnpm "${filters[@]}" --silent typecheck
  echo "TypeScript Completed"
fi

echo "Done"