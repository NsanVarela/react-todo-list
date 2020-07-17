import React from 'react'
import Todo from './Todo'

export default function TodoList (props) {
    // console.log('props -> ', props)
    const {todos, handleStatusChange} = props
    return(
        <ul>
            {todos.list.map(todo => (
                <Todo 
                    key={todo.id}
                    data={todo} 
                    handleStatusChange={handleStatusChange} />
            ))}
        </ul>
    )
}