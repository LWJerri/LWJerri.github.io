#!/usr/bin/env sh

# Abort on errors
set -e

# Install & Build
yarn
yarn build

# Add CNMAE file
echo "lwjerri.js.org" > CNAME

git init

git config --global user.email "CLWJerri@yandex.ua"
git config --global user.name "LWJerri"

git add -A
git checkout gh-pages
git commit -m "Deploy new code"
git push

cd -