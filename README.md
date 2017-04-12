# aws-lambda-typescript
An example for aws lambda functions written in typescript using claudia.js


To run this code
--------------
- git clone https://github.com/assafshp/aws-lambda-typescript.git
- cd aws-lambda-typescript
- npm install claudia -g
- npm install
- npm run build (this will compile ts files to js)
- for the first time only run - claudia create --region us-east-1 --handler function1.handler --name function1 --config function1.json
- claudia create --region us-east-1 --api-module function2 --name function2 --config api.json
- claudia update --config function2.json

