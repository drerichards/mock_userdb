import axios from 'axios'
import { FETCH_API_USERS } from './types'
const url = "http://localhost:5000"

export const fetchApiUsers = dispatch => {
    try {
        const route = `${url}/users`
        axios.get(route)
            .then(response => {
                dispatch({type: FETCH_API_USERS, payload: response.data })
            })
    } catch (error) {
        return error
    }
}