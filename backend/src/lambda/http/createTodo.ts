import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { getUserId } from '../utils';
import { createTodo } from '../../businessLogic/todos'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body)
    // TODO: Implement creating a new TODO item

    const user = getUserId(event)
    const newTask = await createTodo(newTodo, user)

    return {
      statusCode: 201, // 201 for post
      body: JSON.stringify({ item: newTask})
    }

    // return undefined
  })

handler.use(
  cors({
    credentials: true
  })
)
