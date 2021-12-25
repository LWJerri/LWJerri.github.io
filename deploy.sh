#!/usr/bin/env sh

# Abort on errors
set -e

# Initialize Git
git init

git config --global user.email "CLWJerri@yandex.ua"
git config --global user.name "LWJerri"

# Install & Build
yarn
yarn build

# Move to dist folder
cd dist

# Add CNAME
echo "lwjerri.js.org" > CNAME

git add .
git commit -m "test"

git push origin workflows_build:edfrgt --force