import { Todo } from '../model/todo.ts'
import { RouterContext, Status } from '../deps.ts'

export async function getAll(ctx: RouterContext) {
    const todos = await Todo.all()
    ctx.response.status = Status.OK
    ctx.response.body = { todos }
}
