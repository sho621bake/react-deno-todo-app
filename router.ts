import { Router } from './deps.ts'
import { root, todos } from './controller/mod.ts'

export const router = new Router()

router.get('/', root.Home)
router.get('/todos', todos.getAll)
router.get('/todos/:id', todos.get)
