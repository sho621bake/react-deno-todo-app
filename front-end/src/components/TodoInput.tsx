import axios from 'axios'
import React, { useState } from 'react'
import { Todo } from '../../Types'

type Props = {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todos: Todo[]
}

const TodoInput: React.FC<Props> = ({ setTodos, todos }) => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [count, setCount] = useState<number>(todos.length + 1)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8000/todos/', {
            title: inputTitle,
            done: false,
        })

        setCount(count + 1)

        const newTodo: Todo = {
            id: count,
            title: inputTitle,
            done: false,
        }

        setTodos([newTodo, ...todos])
        setInputTitle('')
    }

    return (
        <div className='flex justify-center w-full mt-10'>
            <input
                type='text'
                className='w-2/5 mx-3 py-3 px-4 block border-solid border-2 border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500'
                value={inputTitle}
                onChange={handleInputChange}
                placeholder='Please Insert new Todos...'
            />
            <button
                className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-transparent font-semibold text-green-500 hover:text-white hover:bg-green-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                onClick={handleSubmit}>
                Add
            </button>
        </div>
    )
}

export default TodoInput
