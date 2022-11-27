import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import Dashboard from './container/Dashboard'

const App = () => {
  return (
    <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App