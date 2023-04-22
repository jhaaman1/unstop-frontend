import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const data=JSON.parse(localStorage.getItem("jwt"))||{}
const PrivateRoute = ({children}) => {
     const isAuth=useSelector(store=>store.AuthReducer.isAuth)
     if(!isAuth){
        
               return  <Navigate to ="/signin"  />
         
        }
        return children;
  
}

export default PrivateRoute