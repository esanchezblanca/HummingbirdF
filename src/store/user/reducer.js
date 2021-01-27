const initialState = { user : "" };

export default (state = initialState, action) => {
    if (action.type === 'SAVE_USER') {
        return {
            ...state,
            user: action.payload
        }
    }

    return state;
};

export const selectActiveUser = state => state.userReducer.user;