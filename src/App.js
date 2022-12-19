import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import Dashboard from './container/Dashboard'
import { fetchUser, userAccessToken } from './utils/FetchUser'

const App = () => {

  const [user, setUser] = useState(null)
  const navigate= useNavigate()

  useEffect(() => {
    const accessToken = userAccessToken();
    if(!accessToken) {
      navigate('/', {replace: true})
    }else{
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, [])

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='dashboard/*' element={<Dashboard user = { user } />} />
    </Routes>
  )
}
export default App