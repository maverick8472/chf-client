
// const initState = {}

// const authReducer = (state = initState, action) => {
//     return state
// }

// export default authReducer;

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  
  const initialState = {
      
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,

    authError: null
  };
  
//   export default function(state = initialState, action) {
    
//   }

// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case USER_LOADING:
//             return {
//             ...state,
//             isLoading: true
//             };
//         case USER_LOADED:
//             return {
//             ...state,
//             isAuthenticated: true,
//             isLoading: false,
//             user: action.payload
//             };
//         case LOGIN_SUCCESS:
//         case REGISTER_SUCCESS:
//             localStorage.setItem('token', action.payload.token);
//             return {
//             ...state,
//             ...action.payload,
//             isAuthenticated: true,
//             isLoading: false
//             };
//         case AUTH_ERROR:
//         case LOGIN_FAIL:
//             return {
//                 ...state,
//                 authError: 'login failed'
//             }
//         case LOGOUT_SUCCESS:
//         case REGISTER_FAIL:
//             localStorage.removeItem('token');
//             return {
//             ...state,
//             token: null,
//             user: null,
//             isAuthenticated: false,
//             isLoading: false
//             };
//         default:
//             return state;
//     }
// }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_FAIL:
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case LOGIN_SUCCESS:
            console.log('Login success');
            localStorage.setItem('token', action.token);
            return {
                ...state,
                authError: null,
                isAuthenticated: true,
                isLoading: false,
                token: action.token,
                user: action.payload
            }
        case LOGOUT_SUCCESS:
            console.log('user loged out')
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return state;
    }
}

export default authReducer;