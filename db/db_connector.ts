import { MySQLConnector, Database } from '../deps.ts'

const connection = new MySQLConnector({
    host: '127.0.0.1',
    database: 'deno-db',
    username: 'root',
    password: 'root',
})

export const db = new Database(connection)
