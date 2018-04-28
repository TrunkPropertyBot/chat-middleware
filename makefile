# deploys any code changes and serverless.yml changes
deploy-serverless:
	cd chat-middleware && serverless deploy

# A quicker deploy which doesn't use cloudformation and just packages your code and pushes it up to AWS
deploy-code-changes:
	cd chat-middleware && serverless deploy function -f express_server

# Run our server locally
run-locally:
	cd chat-middleware && serverless offline start
