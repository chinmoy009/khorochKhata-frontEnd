import env from 'react-dotenv';
import CryptoJs from 'crypto-js';


export const getEncryptedPasswordString = (password) => {
    return CryptoJs.AES.encrypt(password, env.SECRET_KEY_FOR_PASS_ENCRYPTION);
}