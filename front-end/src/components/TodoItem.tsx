import React from 'react'
import { Todo } from '../../Types'

type Props = {
    todo: Todo
    handleDone: (todo: Todo) => void
    handleDelete: (todo: Todo) => void
}

const TodoItem: React.FC<Props> = ({ todo, handleDone, handleDelete }) => {
    return (
        <li
            className={
                'flex justify-between items-center my-20 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400' +
                `${todo.done ? 'done' : ''}`
            }>
            <label>
                <input
                    type='checkbox'
                    className='shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                    onClick={() => handleDone(todo)}
                    defaultChecked={todo.done}
                />
                <span className='ml-2'>{todo.title}</span>
            </label>
            <button
                type='button'
                onClick={() => handleDone(todo)}
                className='py-3 px-4 gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
                Delete
            </button>
        </li>
    )
}

export default TodoItem
