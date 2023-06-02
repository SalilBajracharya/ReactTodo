import React, { useState } from 'react';
import { TodoEntity } from '../../models/todoEntity';

interface Props {
    todos: TodoEntity[],
    onAddTodo: (newTodo: TodoEntity) => void
}

export default function AddTodo({ todos, onAddTodo }: Props) {
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo() {
        if (newTodo.trim()) {
            const newId = todos.length + 1;
            const newTodoItem: TodoEntity = {
                id: newId,
                todoitem: newTodo
            };
            onAddTodo(newTodoItem);
            setNewTodo('');
        }
    }

    return (
        <>
            <div className='flex mt-4'>
                <input
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder='Add a new Todo'
                    className='p-2 border border-gray-300 rounded-1 focus:outline-none focus:rine-2 focus:ring-blue-500 flex-grow'
                />
                <button
                    onClick={handleAddTodo}
                    className='bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none'
                >Add</button>
            </div>
        </>
    )
}