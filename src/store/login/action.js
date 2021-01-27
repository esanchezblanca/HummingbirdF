export const saveToken = token =>{
    return {
        type: 'SAVE_TOKEN',
        payload: token
    }
}

export const revokeToken = token =>{
    return{
        type: 'REVOKE_TOKEN',
        payload: token
    }
}


