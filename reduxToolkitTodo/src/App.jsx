import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  
  return (
    <>
      <h3 className='text-2xl text-white'>Learn about redux Toolkit</h3>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
