import {FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER} from '../actions/types'

export default function (state = [], action) {
    console.log(action.type)
    switch (action.type) {
        case FETCH_API_USERS:
            return action.payload
        case ADD_USER:
            return action.payload
        case EDIT_USER:
            console.log(action.payload)
            // return action.payload
            return state
        case DELETE_USER:
            const newState = [...state]
            newState.splice(action.payload, 1)
            return newState
        default:
            return state
    }
}