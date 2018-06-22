import { FETCH_API_USERS} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_API_USERS:
            return [action.payload]
        default:
            return state
    }
}