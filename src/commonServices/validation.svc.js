import lodash from 'lodash';
import {PLEASE_FILL_ALL_REQUIRED_FIELDS, PASSWORDS_DO_NOT_MATCH} from '../constants/signInOrSignUpConstants';

export const validateSignUpUserObject = (userObject) => {
    if(lodash.isEmpty(userObject.username) || lodash.isEmpty(userObject.password) 
        || lodash.isEmpty(userObject.email) || lodash.isEmpty(userObject.firstname) 
        || lodash.isEmpty(userObject.lastname)) {
        return PLEASE_FILL_ALL_REQUIRED_FIELDS;
    } 

    if(userObject.password != userObject.confirmPassword) {
        return PASSWORDS_DO_NOT_MATCH;
    }

    return null;
}