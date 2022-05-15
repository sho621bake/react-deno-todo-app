import { ClientMySQL, NessieConfig, ClientConfig } from './deps.ts'

const connectionConfig: ClientConfig = {
    hostname: 'localhost',
    port: 3306,
    username: 'root',
    db: 'deno-db',
}

const config: NessieConfig = {
    client: new ClientMySQL(connectionConfig),
    migrationFolders: ['./db/migrations'],
    seedFolders: ['./db/seeds'],
}

export default config
