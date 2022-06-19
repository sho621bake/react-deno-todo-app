import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../../Types'

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    const handleDone = (todo: Todo) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === todo.id ? { ...todo, done: !todo.done } : t,
            ),
        )
    }

    const handleDelete = (todo: Todo) => {
        setTodos((prev) => prev.filter((t) => t.id !== todo.id))
    }

    return (
        <div className='flex justify-center my-5'>
            {todos.length <= 0 ? (
                'Not found Todos.'
            ) : (
                <ul className='w-3/5 my-10'>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoList
