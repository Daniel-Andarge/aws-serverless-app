# Serverless Application on AWS

## Project Overview
This project involves the development and deployment of a Serverless and Event-driven Application on AWS using AWS Lambda and the Serverless framework. The application is  a TODO application that allows users to create, read, update, and delete TODO items, with the ability to attach images to each item.


## Technologies and Tools Used
This project leverages a wide range of technologies and tools, from development to deployment:

1. **Development Technologies and Tools**:
   - **Programming Languages**:
     - JavaScript
     - TypeScript
   - **Frontend Framework**:
     - React.js
   - **Backend Runtime**:
     - Node.js

2. **Serverless Framework and AWS Services**:
   - **Serverless Framework**: Used to manage and deploy the serverless application.
   - **AWS Lambda**: Serverless compute service for running the application's backend functions.
   - **AWS API Gateway**: Managed API service for handling the application's API endpoints.
   - **AWS DynamoDB**: NoSQL database service for storing the TODO items.
   - **AWS S3**: Object storage service for storing attachments (e.g., images) associated with TODO items.
   - **AWS Cognito**: User authentication and authorization service for implementing user authentication.
   - **AWS CloudFormation**: Infrastructure as code service for provisioning and managing the required AWS resources.
   - **AWS IAM**: Identity and Access Management service for managing permissions and roles.
   - **AWS CloudWatch**: Logging and monitoring service for the serverless application.

3. **Authentication Service**:
   - **Auth0**: External authentication service for implementing user authentication and authorization.

4. **Development and Testing Tools**:
   - **Code Editor**: Your preferred code editor, such as Visual Studio Code, Sublime Text, or IntelliJ IDEA.
   - **Git**: Version control system for tracking code changes and collaborating.
   - **npm**: Package manager for managing Node.js dependencies.
   - **Jest**: Testing framework for unit testing the application's components.
   - **Cypress**: End-to-end testing framework for testing the application's functionality.

5. **Deployment and Infrastructure Tools**:
   - **Serverless Framework CLI**: Command-line interface for the Serverless framework, used to deploy the application.
   - **AWS CLI**: Command-line interface for interacting with AWS services and managing resources.
   - **AWS Management Console**: Web-based interface for managing and monitoring AWS resources.


## Frontend
The `client` folder contains a web application that can interact with the API developed as part of this project. This frontend should work seamlessly with the serverless application.

## Authentication
To implement authentication in the application, you would need to integrate with an identity provider such as Auth0. The Serverless framework can be used to set up and configure the necessary AWS Cognito user pools and identity pools to handle user authentication and authorization.

## Serverless Application
The core of this project is the implementation of the TODO application using AWS Lambda and the Serverless framework.


## YAML File

The `serverless.yml` file is the configuration file used by the Serverless framework to define the infrastructure and settings for a serverless application. This YAML file is the primary means of configuring the various AWS resources and service settings required for the application.

### Functionality
The application will allow users to perform the following operations on TODO items:

- Create TODO items
- Retrieve TODO items
- Update TODO items
- Delete TODO items
- Optionally attach images to TODO items

Each user will have access only to the TODO items they have created.

### Database
The application uses an AWS DynamoDB table to store the TODO items.

### Deployment
The Serverless framework is used to manage and deploy the various AWS resources required for the application, including:

- AWS Lambda functions
- AWS API Gateway
- AWS DynamoDB
- AWS S3 (for storing attachments)
- AWS CloudFormation
- AWS IAM
- AWS CloudWatch

The Serverless framework simplifies the process of configuring, packaging, and deploying the serverless application to AWS.

## Project Structure
The project should have the following structure:

```
serverless-todo-app/
├── client/
│   └── ...
├── backend/
│   ├── functions/
│   │   ├── create.js
│   │   ├── delete.js
│   │   ├── get.js
│   │   ├── update.js
│   │   └── upload.js
│   ├── models/
│   │   └── todo-item.js
│   ├── package.json
│   ├── serverless.yml
│   └── utils/
│       └── ...
└── README.md
```

The `client` folder contains the frontend web application, and the `backend` folder contains the serverless application code and deployment configuration.

## Getting Started
To get started with the project, follow these steps:

1. Set up your AWS credentials and configure the Serverless framework.
2. Implement the TODO application functionality in the `backend/functions` directory.
3. Implement the frontend web application in the `client` directory.
4. Deploy the serverless application using the Serverless framework.
5. Test the application and make any necessary updates or improvements.

Refer to the individual directories for more detailed instructions on setting up and developing the application.


# How to run the application

## Backend

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

## Frontend

To run a client application first edit the `client/src/config.ts` file to set correct parameters. And then run the following commands:

```
cd client
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless TODO application.

# Postman collection

An alternative way to test your API, you can use the Postman collection that contains sample requests. You can find a Postman collection in this project. To import this collection, do the following.

Click on the import button:

![Alt text](images/import-collection-1.png?raw=true "Image 1")


Click on the "Choose Files":

![Alt text](images/import-collection-2.png?raw=true "Image 2")


Select a file to import:

![Alt text](images/import-collection-3.png?raw=true "Image 3")


Right click on the imported collection to set variables for the collection:

![Alt text](images/import-collection-4.png?raw=true "Image 4")

Provide variables for the collection (similarly to how this was done in the course):

![Alt text](images/import-collection-5.png?raw=true "Image 5")


## Conclusion
This project demonstrates the development and deployment of a Serverless and Event-driven Application on AWS using AWS Lambda and the Serverless framework. The application showcases the use of various AWS services, such as DynamoDB, S3, Cognito, and API Gateway, to create a robust and scalable TODO application.
