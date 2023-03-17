import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import OauthProfile from '../Components/Login/OauthProfile'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/afterauth' element={<OauthProfile/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes