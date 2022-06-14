import React from 'react'
import { Todo } from './Types'

type Props = {
    todo: Todo
    handleDone: (todo: Todo) => void
    handleDelete: (todo: Todo) => void
}

const TodoItem: React.FC<Props> = ({ todo, handleDone, handleDelete }) => {
    return (
        <li className={todo.done ? 'done' : ''}>
            <input
                type='checkbox'
                className=''
                onClick={() => handleDone(todo)}
                defaultChecked={todo.done}
            />
        </li>
    )
}

export default TodoItem
