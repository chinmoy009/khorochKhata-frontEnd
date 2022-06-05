import { combineReducers } from "redux";
import {userSignInReducer, serverConstantReducer} from './userReducer';

const reducer = combineReducers({
    userSignIn: userSignInReducer,
    serverConstantObj: serverConstantReducer
});

export default reducer;