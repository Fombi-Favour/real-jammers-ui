import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Dashboard from './container/Dashboard'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'

const App = () => {

  const [user, setUser] = useState(null)
  const navigate= useNavigate()

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard/*' element={<Dashboard user={user} />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App