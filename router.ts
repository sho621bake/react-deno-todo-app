import { Router } from './deps.ts'
import { root } from './controller/mod.ts'

export const router = new Router()

router.get('/', root.Home)
