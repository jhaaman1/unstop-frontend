import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import OauthProfile from '../Components/Login/OauthProfile'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/afterauth' element={<OauthProfile/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes