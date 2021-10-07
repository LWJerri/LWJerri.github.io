#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "lwjerri.js.org" > CNAME

cd -

git add dist
git commit -m "Upload new website version"
git subtree push --prefix dist origin gh-pages

cd -