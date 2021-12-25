#!/usr/bin/env sh

# Abort on errors
set -e

# Init Git
git init

git config --global user.email "CLWJerri@yandex.ua"
git config --global user.name "LWJerri"

git pull master workflows_build

# Install & Build
yarn
yarn build

# Move to dist folder
cd dist

# Add CNAME file
echo "lwjerri.js.org" > CNAME


git checkout gh-pages
git add -A
git commit -m "Deploy new code"
git push -f git@github.com:LWJerri/lwjerri.github.io.git workflows_build:develop

cd -