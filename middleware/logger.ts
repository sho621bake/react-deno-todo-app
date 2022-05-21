import { Context, yellow, magenta } from '../deps.ts'

export async function logger(
    ctx: Context,
    next: () => Promise<any>,
): Promise<void> {
    await next()

    console.log(
        `${magenta(ctx.request.method)} ${yellow(ctx.request.url.pathname)}`,
    )
}
