// all we are saying is function called as App and export as default

/* here empty tag or we could use 'div' */ 
/* in react we can return only one element form or h1 both are not possible. so wrap it in a 'div' or fragment empty <></> */
// to make things interactive, we need to use hooks or something called as state
// inside react, we cannot update state variable by saying newItem='sdsd'
// how to change value of state? call function setNewItem('aasa')
// we change input value={newItem}
// onChange to change values everytime we change input. whevener i get a new value in input, it is putting there rght in
// when i have a new item in input set that as newItem setNewItem(e.target.value)
// onSubmit event listener for the Add button
// e.preventFefault() will stop page from refreshing
// create brand new todo and add to our list
// todos default is an empty array, then i add elements with setTodos
// function toggleTodo i take id and completed as input and i make sure id in todo list matches then i return new completed value
// () => deleteTodo(todo.id) this is calling a function but deleteTodo(todo.id) returning a value doesn't work
// we got to break into different components to manage them
// setTodos is required for both functions 
// useEffect says run this function every time this function runs
// so whenever todos changes it will run the function  
/* useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  */
// this function localStorage.setItem is taking todos and storing in local storage
// localStorage.setItem
// it is pulling data out from localstorage localStorage.getItem("ITEMS") so faster


import { useState, useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"


export default function App(){

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
      { id: crypto.randomUUID(), title, completed: false},
      ]
    })
}

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  console.log(todos)
  
  // props addTodo calls a function {addTodo}

  return  (
  <> 
  <NewTodoForm onSubmit = {addTodo}/> 
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}