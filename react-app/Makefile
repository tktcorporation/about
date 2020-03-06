ProjectName=tktcorporation
Environment=prod

deploy:
	aws cloudformation deploy \
	--parameter-overrides \
		SecretsManagerName="${ProjectName}-${Environment}" \
	--stack-name "${ProjectName}-${Environment}-hosting" \
	--template cfn/createDestribution.yml \
	--region ap-northeast-1
