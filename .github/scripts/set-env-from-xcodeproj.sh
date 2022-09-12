#!/bin/bash
# set -euo pipefail

cd ios
SCHEME="$(xcodebuild -list -json | jq -r '.project.schemes[0]')"
echo "$SHEME"
PRODUCT_NAME="$(xcodebuild -scheme "Foodienator" -showBuildSettings | grep " PRODUCT_NAME " | sed "s/[ ]*PRODUCT_NAME = //")"
echo "$PRODUCT_NAME"
        