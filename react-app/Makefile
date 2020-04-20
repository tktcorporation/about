ProjectName=tktcorporation
WebsiteDomainName=tktcorporation.com
Environment=prod

clear:
	rm -rf node_modules
	rm -rf build

install:
	yarn

test: install
	yarn test


start-local:
	cd ../ && docker-compose run --rm --service-ports react yarn start

build: clear install
	yarn build

put-on-s3:
	aws s3 sync ./build s3://${WebsiteDomainName} --exclude '*.DS_Store'

infra-deploy:
	aws cloudformation deploy \
	--parameter-overrides \
		WebsiteDomainName="${WebsiteDomainName}" \
		ACMSSLCertificateARN="arn:aws:acm:us-east-1:520430760589:certificate/7ba38eb2-028e-4409-82a7-e1be9bc0b059" \
		HostedZoneId="Z2698C2NRYXL3Y" \
	--stack-name "${ProjectName}-${Environment}-hosting" \
	--template cfn/createDestribution.yml \
	--region ap-northeast-1 \
	--no-fail-on-empty-changeset

deploy/production: infra-deploy put-on-s3


