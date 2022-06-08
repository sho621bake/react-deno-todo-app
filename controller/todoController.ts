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
    if (!todo) {
        ctx.response.status = Status.NotFound
    } else {
        ctx.response.body = { todo }
        ctx.response.status = Status.OK
    }
}

export async function create(ctx: RouterContext) {
    const { title } = await ctx.request.body().value

    const todo = await Todo.create({
        title: title,
        done: false,
        created_at: new Date(),
    })
    ctx.response.body = { todo }
}

export async function update(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    if (!id) {
        ctx.response.status = Status.BadRequest
    } else {
        const todo = await Todo.where({ id: `${id}` }).update({
            done: true,
        })
        ctx.response.body = { todo }
        ctx.response.status = Status.OK
    }
}

export async function remove(ctx: RouterContext) {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    if (!id) {
        ctx.response.status = Status.BadRequest
    } else {
        await Todo.where({ id: id }).delete()
        ctx.response.status = Status.OK
    }
}
