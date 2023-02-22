import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from '../helpers/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import { TodoUpdate } from '../models/TodoUpdate';

const logger = createLogger('Todos')
const todosAccess = new TodosAccess()
const attachmentUtils = new AttachmentUtils()


export async function getTodosForUser(userId: string) {
    logger.info("called getTodosForUser function")
    return todosAccess.getAllTodos(userId)
}


export async function createTodo(
    newTodo: CreateTodoRequest,
    userId: string
    
): Promise<TodoItem> {
   logger.info("Called createTodo function");



   const todoId = uuid.v4();
   const createdAt = new Date().toISOString();
   const attachmentUrl = attachmentUtils.getAttachmentUrl(todoId)
   
   const newTask = {
    userId,
    todoId,
    createdAt,
    attachmentUrl,
    done: false,
    ...newTodo
   }

   return await todosAccess.createTodoItem(newTask) as TodoItem
}


export async function updateTodo(
    todoId: string,
    newTodo: UpdateTodoRequest,
    userId: string
): Promise<TodoUpdate> {
    logger.info("called updateTodo function ") 

    return await todosAccess.updateTodoItem( todoId, userId, newTodo)
}


export async function deleteTodo(
    userId: string,
    todoId: string
): Promise<string>  {
    logger.info("called deleteTodo function ")

    return await todosAccess.deleteTodoItem(userId, todoId)
}

export async function createAttachmentPresignedUrl(
    userId: string,
    todoId: string
): Promise<string> {
    logger.info("called createAttachmentPresignedUrl function ", userId)

    return attachmentUtils.getUploadUrl(todoId)
}