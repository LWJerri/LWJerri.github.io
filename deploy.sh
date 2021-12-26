#!/usr/bin/env sh

# Abort on errors
set -e

# Install & Build
yarn
yarn build

# Move to dist folder
cd dist

# Add CNAME
echo "lwjerri.js.org" > CNAME

git init
git add -A
git commit -m "Deploy code changes"

git push -f https://$1@github.com/LWJerri/lwjerri.github.io.git develop

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -