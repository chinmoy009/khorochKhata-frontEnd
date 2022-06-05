import lodash from 'lodash';

export const extractErrorMessageFromServerError = (error) => {
    return lodash.get(error, "response.data.message", error.message);
}