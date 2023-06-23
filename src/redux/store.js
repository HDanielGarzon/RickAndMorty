import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import reducer from './reducer';

const composeEnhacer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleWare))
);


export default store;