import axios from 'axios'
import { FETCH_API_USERS, ADD_USER, EDIT_USER, DELETE_USER, RESET_USER_DB } from './types'
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
        const route = `${url}/user/add`
        axios.post(route, userRecord)
            .then(response => {
                dispatch({type: ADD_USER, payload: response.data })
            })
    } catch (error) {
        return error
    }
}

export const editUser = (dispatch, userRecord) => {
    try {
        const route = `${url}/user/edit`
        axios.post(route, userRecord)
            .then(response => {
                if(response.data._id){
                    dispatch({type: EDIT_USER, payload: userRecord })
                } else dispatch({type: EDIT_USER, payload: response.data.message })
            })
        } catch (error) {
            return error
    }
}

export const deleteUser = (dispatch, id) => {
    try {
        const route = `${url}/user/${id}/delete`
        axios.delete(route)
            .then(response => {
                dispatch({type: DELETE_USER, payload: id })
            })
    } catch (error) {
        return error
    }
}

export const resetUserDB = (dispatch) => {
    try {
        const route = `${url}/reset_database`
        axios.post(route)
            .then(response => {
                dispatch({type: RESET_USER_DB, payload: response.data })
            })
    } catch (error) {
        return error
    }
}