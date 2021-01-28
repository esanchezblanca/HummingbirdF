const initialState = { token: "" };

export default (state = initialState, action) => {

    if (action.type === 'SAVE_TOKEN') {
        return {
            ...state,
            token: action.payload
        }
    }


    return state;
};



export const selectActiveToken = state => state.token;