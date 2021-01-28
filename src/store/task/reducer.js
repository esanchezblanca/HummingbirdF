const initialState = { task : "" };

export default (state = initialState, action) => {
    if (action.type === 'SAVE_TASK') {
        return {
            ...state,
            task: action.payload
        }
    }

    return state;
};

export const selectActiveTask = state => state.task;