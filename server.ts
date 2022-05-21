import { Application, yellow, magenta } from './deps.ts'
import { router } from './router.ts'
import { logger } from './middleware/logger.ts'

const app = new Application()

app.use(logger)
app.use(router.routes())
app.use(router.allowedMethods())
app.addEventListener('listen', ({ hostname, port }) => {
    console.log(
        yellow('Start listening on :') +
            magenta(`${hostname ?? 'localhost'}:${port}`),
    )
})

app.listen({ port: parseInt(Deno.env.get('port') ?? '8000') })
