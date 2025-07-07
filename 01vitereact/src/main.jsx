import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'

// function Check(){
//   return (
//     <h1>Don't lose control over your mind</h1>
//   )
// }

const name = "DevS"

// this is the way used by react to inject the html element (return value by the function get converted into this type of object where 1st argument(tells type of tag), 2nd(object of attribute), 3rd(children node), at last if there is any variable then it is used)

const reactElement = React.createElement( // this is injected by bable (transpirel)
  'a',
  { href:"https://google.com", target:"_blank"},
  'click me to visit google',
  name
)

createRoot(document.getElementById('root')).render(

  reactElement
)
