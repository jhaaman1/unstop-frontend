import React from 'react'
import { GoogleLogout } from 'react-google-login';


const Client_id="23312408298-dl0daht7fe3qh0e70elps3cjihaj17su.apps.googleusercontent.com";

const Logout = () => {
     const onSuccess=()=>{
          alert("logout successfully")
     }
  return (
    <div>
    <GoogleLogout
      clientId={Client_id}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    >
    </GoogleLogout>
    </div>
  )
}

export default Logout