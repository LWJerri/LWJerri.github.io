#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "lwjerri.js.org" > CNAME

git init
git add -A
git commit -m "Upload new website version"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:LWJerri/LWJerri.github.io.git gh-pages

cd -