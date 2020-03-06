ProjectName=tktcorporation
Environment=prod

deploy/production:
	aws cloudformation deploy \
	--parameter-overrides \
		WebsiteDomainName="tktcorporation.com" \
		ACMSSLCertificateARN="arn:aws:acm:us-east-1:520430760589:certificate/7ba38eb2-028e-4409-82a7-e1be9bc0b059" \
		HostedZoneId="Z2698C2NRYXL3Y" \
	--stack-name "${ProjectName}-${Environment}-hosting" \
	--template cfn/createDestribution.yml \
	--region ap-northeast-1
