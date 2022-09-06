#!/bin/bash
set -euo pipefail
cd ios
SCHEME="$(xcodebuild -list -json | jq -r '.project.schemes[0]')"
PRODUCT_NAME="$(xcodebuild -scheme "Foodienator" -showBuildSettings | grep " Foodienator " | sed "s/[ ]*Foodienator = //")"
 