import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Virtual DOM => It is a react tree 
// reconcillation => it is algorithem to differ the two tree 1(browser tree ) 2 (virtual tree => provided by react)

function App() {

  // useState() hook is used in react to manage state . allows for store, update
  // const [state, setState] = useState(initialValue);
  /*  
    state → Holds the current state value.
    setState → Function to update the state.
    initialValue → The default value for the state. 
  */

  let [counter,setCounter] = useState(29) 
  // let counter = 5

  const addValue = ()=>{
    console.log("clicked",counter);
    // counter = counter + 1
    if(counter<25){
      setCounter(counter + 1)
    }

    // setCounter => takes the new value to put in counter
  
  }
  const removeValue = ()=>{
    console.log("clicked",counter);
    // counter = counter - 1
    if(counter>0){
      setCounter(counter - 1)
    }
    else counter = counter + 1
  }

  return (
    <>
    <h1>Jai Shree Ram</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button> 

    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
