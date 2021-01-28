import { createStore, combineReducers, compose } from 'redux';
import loginReducer from './login/reducer';
import userReducer from './user/reducer';
import taskReducer from './task/reducer';
import persistState from 'redux-localstorage';


const reducers = combineReducers({
   user: userReducer,
   token: loginReducer,
   task: taskReducer
});

//Persistencia del estado
const mainEnhancer = compose(persistState('user','token','task'));

const store = createStore(
    reducers,
    mainEnhancer);
    


export default store;