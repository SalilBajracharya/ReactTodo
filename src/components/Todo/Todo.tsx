import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { TodoEntity } from '../../models/todoEntity';

export default function Todo() {
    const [todos, setTodos] = useState<TodoEntity[]>([]);

    function handleAddTodo(newTodo: TodoEntity) {
        setTodos([...todos, newTodo])
    }
    return(
    <div className=' flex items-center justify-center mt-6'>
        <div className='max-w-md p-6 bg-white rounded shadow'>
            <h1 className='text-2xl font-bold'>Todo App</h1>
            <TodoList todos={todos} />
            <AddTodo todos={todos} onAddTodo={handleAddTodo} />
        </div>
    </div>
    )
}

