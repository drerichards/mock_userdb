import axios from 'axios'
import { FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER } from './types'
const url = "http://localhost:5000"

export const fetchApiUsers = dispatch => {
    try {
        const route = `${url}/users`
        axios.get(route)
            .then(response => {
                console.log(response.data.users)
                dispatch({type: FETCH_API_USERS, payload: response.data.users })
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
        // console.log(userRecord)
        const route = `${url}/user/edit`
        axios.post(route, userRecord)
            .then(response => {
                dispatch({type: EDIT_USER, payload: userRecord })
            })
    } catch (error) {
        return error
    }
}

export const deleteUser = (dispatch, userID) => {
    try {
        // console.log(userID)
        const route = `${url}/user/delete`
        axios.put(route, userID)
            .then(response => {
                dispatch({type: DELETE_USER, payload: userID })
            })
    } catch (error) {
        return error
    }
}