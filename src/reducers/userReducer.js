import {USER_SIGN_IN_REQUEST, USER_SIGN_IN_PASS, USER_SIGN_IN_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_PASS, USER_SIGN_UP_FAIL} from '../constants/signInOrSignUpConstants';
import { GET_SERVER_CONSTANTS_FAIL, GET_SERVER_CONSTANTS_PASS, GET_SERVER_CONSTANTS_REQUEST } from '../constants/generalConstants';

export const userSignInReducer = (state = {
    "loading": false,
    "userInfo": null,
    "error": null
}, action) => {
    switch(action.type) {
        case USER_SIGN_IN_REQUEST:
        case USER_SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SIGN_IN_PASS: 
        case USER_SIGN_UP_PASS:
            return {
                loading: false,
                userInfo: action.payload,
                error: null
            }
        case USER_SIGN_IN_FAIL:
        case USER_SIGN_UP_FAIL:
            return {
                loading: false,
                error: action.payload,
                userInfo: null
            }
        default:
            return state;
    }
}

export const serverConstantReducer = (state = {
    "loading": false,
    "serverConstantObj": null,
    "error": null
}, action) => {
    switch(action.type) {
        case GET_SERVER_CONSTANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_SERVER_CONSTANTS_PASS: 
            return {
                loading: false,
                serverConstantObj: action.payload,
                error: null
            }
        case GET_SERVER_CONSTANTS_FAIL:
            return {
                loading: false,
                error: action.payload,
                serverConstantObj: null
            }
        default:
            return state;
    }
}