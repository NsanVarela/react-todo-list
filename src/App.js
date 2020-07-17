import React, {useState} from 'react'
import TodoList from './components/TodoList'

const firstTodos = {
  list: [
    {
      id: 1,
      description: 'Apprendre React',
      done: false
    },
    {
      id: 2,
      description: 'Créer des Class Components (CC)',
      done: false
    },
    {
      id: 3,
      description: 'Créer des Stateless Functional Components (SFC)',
      done: true
    },
    {
      id: 4,
      description: 'Prendre en main les Hooks',
      done: false
    }
  ]
}

function App() {
  
  const [todoId, setTodoId] = useState()                  // Hook "useState" => retourne un array avec 2 elmts : elmt à modifier + fonction qui modifie l'état
  const [todos, setTodos] = useState(firstTodos)          // ici prend en param une valeur par défaut
  
  function handleStatusChange(id) {
    setTodoId(id)

    const todoToModify = todos.find(todo => todo.id === id)
    todoToModify.done = !todoToModify.done
    const newTodos = todos.map(todo => (todo.id !== id ? todo : todoToModify))
    setTodos({list: newTodos})
  }

  return (
    <>
      <h1>La Todo App</h1>
      <div>todoId vaut : {todoId}</div>
      <TodoList todos={firstTodos} handleStatusChange={handleStatusChange}/>
    </>
  )

}

export default App
