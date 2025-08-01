import { useState, useEffect, useRef, useCallback } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if( numberAllowed ) str += "0123456789"
    if( charAllowed ) str += "!@#$%^&*()_+{}=[]~`"

    for( let i = 1; i <= length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
      window.navigator.clipboard.writeText(password);
    }
  },[password])


  useEffect( () => {
      passwordGenerator()
  },[length, numberAllowed, charAllowed])
  

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500   bg-gray-700">
  <h1 className="my-1 font-bold  text-white text-center">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
      type="text" 
      className="outline-none w-full py-1 px-3 bg-white" 
      value={password} 
      placeholder="Password" 
      readOnly 
      ref = {passwordRef}
    />
    <button 
    onClick={copyPasswordToClipboard}
    className='outline-none cursor-pointer text-white px-3 py-0.5 shrink-0  bg-blue-600'>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input
        type="range" 
        min={8} max={100} 
        value={length} 
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
      />
      <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={() => {
        setNumberAllowed((prev) => !prev);
      }}
      />
      <label>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={charAllowed}
      id='charInput'
      onChange={() => {
        setCharAllowed((prev) => !prev);
      }}
      />
      <label>Characters</label>
    </div>
  </div>
</div>

  </>
  )
}

export default App
