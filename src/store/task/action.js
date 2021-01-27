const saveTask = task =>{

    return {
        type: 'SAVE_TASK',
        payload: task
    }
}

export default saveTask;