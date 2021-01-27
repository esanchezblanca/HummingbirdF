import { createStore, combineReducers } from 'redux';
import loginReducer from './login/reducer';
import userReducer from './user/reducer';

const reducers = combineReducers({
    userReducer,
    loginReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;