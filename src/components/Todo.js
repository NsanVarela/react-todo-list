import React from 'react'

export default function Todo (props) {
    const {data, handleStatusChange} = props;
    return (
        <div>
            <input 
                type="checkbox" 
                checked={data.done} 
                onChange={ () => handleStatusChange(data.id) }
            />
            {data.description} - {data.done ? "fait" : "à faire"}
        </div>
    )
}