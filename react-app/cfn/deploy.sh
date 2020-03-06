#!/bin/bash

cd `dirname $0`

# if [ -z "$AWS_ACCESS_KEY_ID" ]; then
#   echo "ERROR: AWS_ACCESS_KEY_ID is undefined"
#   exit 1
# fi
# if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
#   echo "ERROR: AWS_SECRET_ACCESS_KEY is undefined"
#   exit 1
# fi
if [ -z "$1" ]; then
  echo "ERROR: ENVIRONMENT is undefined"
  exit 1
fi

Environment=$1

if [ ! "$Environment" = "prod" ]; then
  echo "ERROR: ENVIRONMENT can have \"prod\" only"
  exit 1
fi

ProjectName="tktcorporation"

aws cloudformation deploy \
    --parameter-overrides \
        SecretsManagerName="${ProjectName}-${Environment}" \
    --stack-name "${ProjectName}-${Environment}-hosting" \
    --template createDestribution.yml \
    --region ap-northeast-1
