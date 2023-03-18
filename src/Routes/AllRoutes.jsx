import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import OauthProfile from '../Components/Login/OauthProfile'
import Compete from '../Pages/Compete/Compete'
import Home from '../Pages/Home'
import Jobs from '../Pages/Jobs/Jobs'
import Learn from '../Pages/Learn Page/Learn'
import MentorShip from '../Pages/MentorShip/MentorShip'
import Practice from '../Pages/Practice/Practice'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/afterauth' element={<OauthProfile/>}/>
            <Route path='/learn' element={<Learn/>}/>
            <Route path='/compete' element={<Compete/>}/>
            <Route path='/practice' element={<Practice/>}/>
            <Route path='/mentorship' element={<MentorShip/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            
            
        </Routes>
    </div>
  )
}

export default AllRoutes