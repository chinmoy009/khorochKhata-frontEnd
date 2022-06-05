import Axios from 'axios';
import {USER_SIGN_IN_REQUEST, USER_SIGN_IN_PASS, USER_SIGN_IN_FAIL, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_PASS} from '../constants/signInOrSignUpConstants';
import { GET_SERVER_CONSTANTS_REQUEST, GET_SERVER_CONSTANTS_PASS, GET_SERVER_CONSTANTS_FAIL } from '../constants/generalConstants';
import {extractErrorMessageFromServerError} from '../commonServices/util.svc';

export const signIn = (username, password) => async(dispatch) => {
    dispatch({
        type: USER_SIGN_IN_REQUEST,
        payload: {username, password}
    });
    try{
        const {data} = await Axios.post('/users/signin', {username, password});
        dispatch({
            type: USER_SIGN_IN_PASS,
            payload: data
        });
        localStorage.setItem('khorochKhatauserInfo', JSON.stringify(data));
    } catch(error) {
        let message = extractErrorMessageFromServerError(error);
        dispatch({
            type: USER_SIGN_IN_FAIL,
            payload: message
        })
    }
}

export const signUp = (userInfoObject) => async(dispatch) => {
    dispatch({
        type: USER_SIGN_UP_REQUEST,
        payload: userInfoObject
    });
    try {
        const {data} = await Axios.post('/users/signup', userInfoObject);
        dispatch({
            type: USER_SIGN_UP_PASS,
            payload: data
        });
        localStorage.setItem('khorochKhatauserInfo', data);
    } catch(error) {
        let message = extractErrorMessageFromServerError(error);
        dispatch({
            type: USER_SIGN_UP_FAIL,
            payload: message
        });
    }
    
}


export const getServerConstants = () => async(dispatch) => {
    dispatch({
        type: GET_SERVER_CONSTANTS_REQUEST,
        payload: {}
    });
    try {
        const {data} = Axios.get('/users/getUserServerConstants');
        dispatch({
            type: GET_SERVER_CONSTANTS_PASS,
            payload: data
        });
    } catch(error) {
        let message = extractErrorMessageFromServerError(error);
        dispatch({
            type: GET_SERVER_CONSTANTS_FAIL,
            payload: message
        });
    }
}