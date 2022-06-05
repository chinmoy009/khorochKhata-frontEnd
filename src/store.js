import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('khorochKhatauserInfo') 
            ? JSON.parse(localStorage.getItem('khorochKhatauserInfo')) : null
    },
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(
    applyMiddleware(thunk)
));

export default store;