import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App