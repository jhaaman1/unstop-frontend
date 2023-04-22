import * as types from "./actionTypes"



const initialState = {
  isAuth: false,
  token: "",

  isLoading: false,
  isError: false,

};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
    
        isError: false

      };
    case types.LOGIN_FAILURE:
      return {
        isAuth: false,
        isLoading: false,
        isError: true,
        token: "",

      }
      case types.GET_GOOGLE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload,
      
          isError: false
  
        };
   
    default: return state;
  }
  

};

export { reducer };
