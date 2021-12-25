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

# Initialize Git
git init

git config --global user.email "CLWJerri@yandex.ua"
git config --global user.name "LWJerri"

git add -A
git commit -m "test"
git push git@github.com:LWJerri/lwjerri.github.io.git workflows_build:develop --force

cd -
