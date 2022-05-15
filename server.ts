import { Application } from './deps.ts'
import { router } from './router.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.addEventListener('listen', ({ hostname, port }) => {
    console.log('Start listening on :' + `${hostname ?? 'localhost'}:${port}`)
})

app.listen({ port: parseInt(Deno.env.get('port') ?? '8000') })
