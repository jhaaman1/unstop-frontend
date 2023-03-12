import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element='' />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            
        </Routes>
    </div>
  )
}

export default AllRoutes