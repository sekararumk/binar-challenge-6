import React, { useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import jwtDecode from "jwt-decode"
import axios from "axios"
import { useDispatch } from "react-redux"

import ProtectedRoute from './Component/HOC/ProtectedRoute'
import UnprotectedRoute from './Component/HOC/UnprotectedRoute'
import Login from './Component/Page/Login'
import Register from './Component/Page/Register/Register'
import Home from './Component/Page/Home'
import UserPage from './Component/Page/UserPage'
import AdminPage from './Component/Page/AdminPage'
import Logout from './Component/Page/Logout'
import userSlice from './store/user'

const App = () => {

  const dispatch = useDispatch()

  useEffect( () => {
    try {
      const token = localStorage.getItem('carAccessToken')
      const userData = jwtDecode(token)
      axios.get(`http://localhost:4000/users/${userData.sub}`)
      .then( res => {
        dispatch( userSlice.actions.addUser({ userData: res }))

      })
    } catch {}
    
  }, [])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* ALL */}
          <Route index element={<Home />} />
          <Route path="logout" element={<Logout />} />

          {/* PUBLIC ONLY */}
          <Route path="/" element={<UnprotectedRoute />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          
          {/* PROTECTED */}
          <Route path="/" element={<ProtectedRoute />} >
            <Route path="admin-page" element={<AdminPage />} />
            <Route path="user-page" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
