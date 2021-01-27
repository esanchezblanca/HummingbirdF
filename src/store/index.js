import { createStore, combineReducers, compose } from 'redux';
import loginReducer from './login/reducer';
import userReducer from './user/reducer';
import persistState from 'redux-localstorage'

const reducers = combineReducers({
   user: userReducer,
   token: loginReducer,
});

const mainEnhancer = compose(persistState('token','user'));

const store = createStore(
    reducers,
    {},
    mainEnhancer
);


export default store;