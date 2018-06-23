import {FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_API_USERS:
            return action.payload
        case ADD_USER:
            return action.payload
        case EDIT_USER:
            return action.payload
        case DELETE_USER:
            return action.payload
        default:
            return state
    }
}