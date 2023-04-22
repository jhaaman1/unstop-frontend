import React from 'react'
import {Routes,Route} from "react-router-dom"
import Signin from './Signin'
import Course from './Course'
import PrivateRoute from './PrivateRoute'
import Homepage from './Homepage'

const AllRoutes = () => {
  return (
<Routes>
     <Route path="/" element={<Homepage/>} />
     <Route path="/signin" element={<Signin/>} />
     <Route path="/course" element={<PrivateRoute><Course/></PrivateRoute>} />
</Routes>
  )
}

export default AllRoutes