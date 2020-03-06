# How To Deploy Web Interface

​Deploying for Backend

## Cloudformation Stack Create

The following AWS CLI command will initiate stack creation:

```bash
export ENV={dev or prod}
export WebsiteDomainName=
export HostedZoneId=
export CFSSLCertificateARM=
aws cloudformation create-stack \
--stack-name tlc-push-notification-console-$ENV \
--template-body file://cloudFormationTemplate.yml \
--parameters \
ParameterKey=WebsiteDomainName,ParameterValue=$WebsiteDomainName \
ParameterKey=HostedZoneId,ParameterValue=$HostedZoneId \
ParameterKey=CFSSLCertificateARM,ParameterValue=$CFSSLCertificateARM
```

Parameters are as follows:

1. WebsiteDomainName
Ensure that this matches the `VUE_APP_S3D_BUCKET` field in the relevant .env file

2. HostedZoneId
ID of the relevant AWS Route 53 Hosted Zone.

3. CFSSLCertificateARM
SSL Certificate ID
After fields are complete, continue with stack creation with no changes to the next two pages.

Full stack creation should take 20+ minutes so strap in.

## Upload/Update built application to S3 Bucket

The vue-cli-plugin-s3-deploy package will handle uploading the built project to your previously created bucket. 
You need to ensure that your [AWS credentials are properly configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) in your environment for this to work.

Running  
`npm run build:development`  
or  
`npm run build:production`  
at root of the project to build the project.  
After successful build, run  
`npm run deploy:development`  
or  
`npm run deploy:production`  

to trigger the upload to the s3 bucket (This can also be accomplished manually).
(Ensure that the relevant .env is present in project root and double check that the . is present in the filename to avoid headache down the line)

fields .env.development and .env.production should look like as follows :

```.env
# .env.production
# .env.development

VUE_APP_ENVIRONMENT={production or development}
VUE_APP_API_ENDPOINT=
VUE_APP_AWS_REGION=ap-northeast-1
VUE_APP_AWS_USERPOOL_ID=
VUE_APP_AWS_CLIENT_ID=
VUE_APP_IDENTITY_POOL_ID=

VUE_APP_S3D_BUCKET={console.tlcapp.net or dev.console.tlcapp.net or stg.console.tlcapp.net}
VUE_APP_S3D_REGION=ap-northeast-1
```

- Domain Name
  - dev
    - dev.console.tlcapp.net
  - stg
    - stg.console.tlcapp.net
  - prod
    - console.tlcapp.net
