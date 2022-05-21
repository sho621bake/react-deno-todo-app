import { Status, RouterContext } from '../deps.ts'

export function Home(ctx: RouterContext): void {
    ctx.response.status = Status.OK
    ctx.response.body = 'Todo List with 🦕'
}
