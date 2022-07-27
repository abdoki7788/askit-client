import { LOG_IN, LOG_OUT, ON_START } from "./types";
import axios from 'axios';

let initialState = {
    isAuthenticated : false,
    token : '',
    user:[]
}

const Login = (state, token) => {

    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
    console.log('logged in !', state);

    return {
      ...state,
      isAuthenticated : true,
      token
    }
}

const Logout = (state) => {
  
  localStorage.removeItem('token')
  axios.defaults.headers.common['Authorization'] = ''
  console.log('logged out !', state);

  return {
    ...state,
    isAuthenticated : false,
    token : ''
  }
}

const onStart = (state) => {
    let token = localStorage.getItem('token')

    if (token) {
      axios.get('http://127.0.0.1:8070/auth/users/me').then(
          response => {
            console.log('user-information : ',state.user)
            return {
              ...state,
              user: response.data
            }
          }
        ).catch(
          err => {
            // Logout(state)
            console.log('Not authenticated')
            return state
          }
        )
    } else {
      console.log('Token not found!')
      Logout(state)
      return state
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: return Login(state, action.payload)

        case ON_START: return onStart(state)

        case LOG_OUT: return Logout(state)
    
        default: return state
    }
}

export default reducer;