import { Todo } from '../model/todo.ts'
import { RouterContext, Status, helpers } from '../deps.ts'

export async function getAll(ctx: RouterContext) {
    const todos = await Todo.all()
    ctx.response.status = Status.OK
    ctx.response.body = { todos }
}

export async function get(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    const todo = await Todo.select('*').find(id)
    ctx.response.body = { todo }
}

export async function update(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    const todo = await Todo.where({ id: `${id}` }).update({
        done: 1,
    })
    ctx.response.body = { todo }
}
