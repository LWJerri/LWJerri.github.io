#!/usr/bin/env sh

# Abort on errors
set -e

# Install & Build
yarn
yarn build

# Move to dist folder
cd dist

# Add CNMAE file
echo "lwjerri.js.org" > CNAME

git init

git config --global user.email $EMAIL
git config --global user.name $USERNAME

git add -A
git commit -m "Deploy new code"

git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git gh-pages

cd -