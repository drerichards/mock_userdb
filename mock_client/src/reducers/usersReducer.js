import {FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_API_USERS:
            return action.payload
        case ADD_USER:
            const addData = action.payload
            if(addData._id){
                const newAddState = [...state]
                newAddState.unshift({
                    _id: addData._id,
                    first_name: addData.first_name,
                    last_name: addData.last_name,
                    username: addData.username,
                    email: addData.username})
                return newAddState
            } else {
                alert(addData.message)
                return state
            }
        case EDIT_USER:
            if(action.payload._id) {
                const newEditState = [...state]
                const {_id, first_name, last_name, username, email, index} = action.payload
                newEditState.splice(index, 1, 
                    {_id, first_name, last_name, username, email})
                return newEditState
            } else {
                alert(action.payload)
                return state
            }
        case DELETE_USER:
            const newDeleteState = [...state]
            newDeleteState.splice(action.payload, 1)
            return newDeleteState
        default:
            return state
    }
}