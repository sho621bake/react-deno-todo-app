import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { Todo } from '../Types'

const initialState: Todo[] = [
    {
        id: 1,
        title: 'First Todo',
        done: false,
    },
    {
        id: 2,
        title: 'Second Todo',
        done: true,
    },
]

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialState)

    return (
        <div>
            <TodoList setTodos={setTodos} todos={todos} />
        </div>
    )
}
export default App
