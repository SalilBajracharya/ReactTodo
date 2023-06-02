import React from 'react'
import { TodoEntity } from '../../models/todoEntity';


interface Props{
    todos: TodoEntity[];
}

export default function TodoList({todos}: Props){
    return(
        <ul>
            {todos.map(todo => (
                <li 
                    key={todo.id} 
                    className='bg-slate-100 hover:shadow-lg
                            p-2 my-2 rounded
                            flex justify-between justify-center'
                >
                    <div className='todo-item flex items-center'>{todo.todoitem}</div>
                    <div className='todo-action font-thin'>
                        <button className='rounded bg-teal-500 py-1 px-2 mx-1 text-white font-normal'>Done</button>
                        <button className='rounded bg-red-500 py-1 px-2 mx-1 text-white font-normal'>Cancel</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}