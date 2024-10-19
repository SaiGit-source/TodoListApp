// all we are saying is function called as App and export as default

import "./styles.css"
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


import { useState } from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, 
      { id: crypto.randomUUID, title: newItem, completed: false},
    ])
  }

  console.log(todos)
  

  return  (
  <> 
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>

  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn bth-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn bth-danger">Delete</button>
    </li>

  </ul>
  </>
  )
}