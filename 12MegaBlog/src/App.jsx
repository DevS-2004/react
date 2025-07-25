import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice.js"
import {Footer , Header} from './components'
import './App.css'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])
  

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      Header:<Header />
      <main>
        {/* <Outlet /> */}
      </main>
      Footer:<Footer />
    </div>
  </div>
  )
  : null
}

export default App
