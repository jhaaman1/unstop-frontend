import { GoogleLogin } from 'react-google-login';
import React from 'react'
import { postData,googleLog } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Client_id="23312408298-dl0daht7fe3qh0e70elps3cjihaj17su.apps.googleusercontent.com";

const Log = () => {
     const navigate=useNavigate()
     const dispatch=useDispatch()

     const onSuccess=(res)=>{
      dispatch(googleLog(res.tokenId,navigate))
     
     }
     const onFailure=(res)=>{
console.log("login failure",res)
     }
  return (
    <div>
       <GoogleLogin
       style={{width:"70%",color:"#000"}}
    clientId={Client_id}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default Log;