#!/usr/bin/bash

# This script is used to build the project
set -e

# Remove the old build directory
rm -rf dist

# Build the project
echo "Building the project"
npm run build

# .nojekyll to bypass Jekyll processing
cd dist
touch .nojekyll

# add the CNAME file
echo "sopy.one" > CNAME
