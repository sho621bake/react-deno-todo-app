import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { Todo } from '../Types'

const initialState: Todo[] = []

const App: React.FC = () => {
    const [todo, setTodos] = useState(initialState)

    return (
        <div>
            <TodoInput setTodos={setTodos} todos={todo} />
            <TodoList setTodos={setTodos} todos={todo} />
        </div>
    )
}
export default App
