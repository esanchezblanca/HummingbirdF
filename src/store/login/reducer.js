const initialState = { token: "" };

export default (state = initialState, action) => {
    if (action.type === 'SAVE_TOKEN') {
        return {
            ...state,
            token: action.payload
        }
        
    }else if(action.type === 'REVOKE_TOKEN'){
        return{
            ...state,
            token: ""
        }
    }

    return state;
};



export const selectActiveToken = state => state.loginReducer.token;