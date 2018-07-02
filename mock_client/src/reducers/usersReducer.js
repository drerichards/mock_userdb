import {FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_API_USERS:
            return action.payload
        case ADD_USER:
            return action.payload
        case EDIT_USER:
            const newEditState = [...state]
            const {_id, first_name, last_name, username, email, index} = action.payload
            newEditState.splice(index, 1, 
                {_id, first_name, last_name, username, email})
            return newEditState
        case DELETE_USER:
            const newDeleteState = [...state]
            newDeleteState.splice(action.payload, 1)
            return newDeleteState
        default:
            return state
    }
}