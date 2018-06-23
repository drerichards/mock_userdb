import axios from 'axios'
import { FETCH_API_USERS } from './types'
import { ADD_USER } from './types'
import { EDIT_USER } from './types'
import { DELETE_USER } from './types'
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

export const addUser = (dispatch, userRecord) => {
    try {
        console.log(userRecord)
        const route = `${url}/user/add`
        axios.get(route, userRecord)
            .then(response => {
                dispatch({type: ADD_USER, payload: response.data })
            })
    } catch (error) {
        return error
    }
}

export const editUser = (dispatch, userRecord) => {
    try {
        console.log(userRecord)
        const route = `${url}/user/edit`
        axios.get(route, userRecord)
            .then(response => {
                dispatch({type: EDIT_USER, payload: response.data })
            })
    } catch (error) {
        return error
    }
}

export const deleteUser = (dispatch, userID) => {
    try {
        console.log(userID)
        const route = `${url}/user/delete`
        axios.get(route, userID)
            .then(response => {
                dispatch({type: DELETE_USER, payload: id })
            })
    } catch (error) {
        return error
    }
}