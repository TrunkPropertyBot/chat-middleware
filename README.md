# Chat Middleware for Trunk Bot
This node.js webserver will listen for input for our bot from different mediums (Just slack at the moment), then parse the data into a general format and forward it to the backend service.

## Overview
We have used the [serverless framework](https://serverless.com/framework/) which helps with packaging our app and deploying it to AWS lambda along with all the required resources inside of a cloudformation stack.

## Working with this Repo
The makefile will show you how to run locally and deploy our `chat-middleware`.
