import * as types from "./actionTypes"
import axios from "axios"


const postData=(payload,navigate)=>(dispatch)=>{
dispatch({type:types.LOGIN_REQUEST})
  return axios.post("https://odd-ruby-angelfish-wear.cyclic.app/signin",payload).then((r)=>{
    dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
  
   navigate("/course")
 
  
  }).catch((e)=>{
    dispatch({type:types.LOGIN_FAILURE})
    console.log(e.response)
    alert(`${e.response.data}`)
  })
}

const googleLog=(payload,navigate)=>(dispatch)=>{
      dispatch({type:types.GET_GOOGLE_SUCCESS,payload:payload})
    
     navigate("/course")
   
    

   
   
  }


export {postData,googleLog}