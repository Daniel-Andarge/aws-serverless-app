import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { createLogger } from '../utils/logger'
import { TodoItem } from '../models/TodoItem'
import { TodoUpdate } from '../models/TodoUpdate';
var AWSXRay = require('aws-xray-sdk');

const XAWS = AWSXRay.captureAWS(AWS)

const logger = createLogger('TodosAccess')

const todoTable = process.env.TODOS_TABLE
const indexName = process.env.INDEX_NAME

// TODO: Implement the dataLayer logic
export class TodosAccess{
    constructor(
        private docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private todosTable = todoTable,
        private todosIndex = indexName
    ) {}

    async getAllTodos(userId: string): Promise<TodoItem[]> {
        logger.info("Calling getallTodos function")

        const queryResult = await this.docClient.query({
            TableName: this.todosTable,
            IndexName: this.todosIndex,
            KeyConditionExpression: 'userId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId
            }
        }).promise()

        const items = queryResult.Items
        return items as TodoItem[]
    }

    async createTodoItem(todoItem: TodoItem): Promise<TodoItem> {
        console.log("Creating new todo");

        const params = {
            TableName: this.todosTable,
            Item: todoItem,
        };

        const result = await this.docClient.put(params).promise();
        console.log(result);

        return todoItem as TodoItem;
    }

    async updateTodoItem(
        todoId: string,
        userId: string,
        todoUpdate: TodoUpdate
    ) {
        logger.info("Calling updateTodoItem function")

        const res = await this.docClient.update({
            TableName: this.todosTable,
            Key: {
                todoId, 
                userId
            },
            
            UpdateExpression: 'set #name = :name, done = :done',
            ExpressionAttributeValues: {
                ':name': todoUpdate.name,
               
                ':done': todoUpdate.done
            },
            ExpressionAttributeNames: {
                '#name': 'name'
            },
            ReturnValues: 'ALL_NEW'
        }).promise()

        const updatedTodo = res.Attributes
        return updatedTodo as TodoUpdate
    }

    async deleteTodoItem(
        userId: string,
        todoId: string
    ): Promise<string> {
        logger.info("Calling updateTodoItem function")

        await this.docClient.delete({
            TableName: this.todosTable,
            Key: {
                todoId,
                userId,
            }
        }).promise()

        return todoId as string
    }

}

