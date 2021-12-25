#!/usr/bin/env sh

# Abort on errors
set -e


git init

git config --global user.email "CLWJerri@yandex.ua"
git config --global user.name "LWJerri"

# Install & Build
yarn
yarn build

cd dist

git checkout develop
git add -A
git commit -m "Deploy new code"

git push origin workflows_build:develop --force
# Move to dist folder
#cd dist

# Add CNAME file
#echo "lwjerri.js.org" > CNAME


#git add -A
#git commit -m "Deploy new code"
#cd -