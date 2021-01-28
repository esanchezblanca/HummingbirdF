import { createStore, combineReducers, compose } from 'redux';
import loginReducer from './login/reducer';
import userReducer from './user/reducer';
import taskReducer from './task/reducer';
import persistState from 'redux-localstorage';

const reducers = combineReducers({
    userReducer,
    loginReducer,
    taskReducer,
});


const mainEnhancer = compose(persistState(userReducer.user,loginReducer.token,taskReducer.task));

const store = createStore(
    reducers,
    mainEnhancer
);

export default store;