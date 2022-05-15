const configMySQL = {
    migrationFolder: `./migrations`,
    connection: {
        hostname: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        db: 'deno-todo',
    },
    dialect: 'mysql',
}

export default configMySQL
