const initialState = {
    users:[],
}

export default function(state = initialState, action){

    if (action.type === 'GET_BOOKS'){
        return {
            ...state,
            users:action.arr,
        }
    }
    else{
        return state
    }

}