import { db } from '../db/db_connector.ts'
import { Model, DataTypes } from '../deps.ts'

class Todo extends Model {
    static table = 'todos'
    static timestamps = true

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        done: DataTypes.BOOLEAN,
        title: DataTypes.STRING,
    }

    static defaults = {
        done: false,
    }
}

db.link([Todo])

await db.sync()
