import React from 'react'
import { Todo } from '../../Types'
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from 'axios'

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const { data, error } = useSWR('http://localhost:8000/todos', fetcher)

    const handleDone = async (todo: Todo) => {
        await axios.put(`http://localhost:8000/todos/${todo.id}`, {
            id: todo.id,
            done: todo.done ? false : true,
        })
        setTodos((prev) =>
            prev.map((t) =>
                t.id === todo.id ? { ...todo, done: !todo.done } : t,
            ),
        )
    }

    const handleDelete = (todo: Todo) => {
        setTodos((prev) => prev.filter((t) => t.id !== todo.id))
    }

    return !error ? (
        <div className='flex justify-center my-5'>
            {data === undefined ? (
                'Not found Todos.'
            ) : (
                <ul className='w-3/5 my-10'>
                    {data.todos.map((todo: any) => (
                        <li
                            className={
                                'flex justify-between items-center my-20 bg-white border shadow-sm rounded-xl p-4 md:p-5' +
                                `${todo.done ? 'done' : ''}`
                            }>
                            <label>
                                <input
                                    type='checkbox'
                                    className='shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500'
                                    onClick={() => handleDone(todo)}
                                    defaultChecked={todo.done}
                                />
                                <span className='ml-2'>{todo.title}</span>
                            </label>
                            <button
                                type='button'
                                onClick={() => handleDelete(todo)}
                                className='py-3 px-4 gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
                                <FontAwesomeIcon icon={solid('trash')} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    ) : (
        error
    )
}

export default TodoList
