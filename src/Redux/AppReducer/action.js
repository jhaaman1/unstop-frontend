import axios from "axios"
import * as types from "./actionType"

const getData=(dispatch)=>{
     dispatch({type:types.GET_DATA_REQUEST})
     return axios.get("https://odd-ruby-angelfish-wear.cyclic.app/course").then((r)=>{
          dispatch({type:types.GET_DATA_SUCCESS,payload:r.data});

     }).catch((e)=>{
          alert("error in course data getting")
     })
}
export {getData}