import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_DETAILS_RESET,
} from '../constants/userConstants'


axios.defaults.baseURL = 'http://3.72.53.53:8000';


export const register = (user) => async (dispatch) => {
    
    const { username, password, first_name, last_name, email } = user

    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/users/register/`,
            { 
                'username': username, 
                'password': password, 
                'first_name': first_name,
                'last_name': last_name,
                'email': email
            },
            config
        )


        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}






// MyTokenObtainPairView
// Returns UserToken: {id, token, access, refresh}
export const getUserToken = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/users/login`,
            { 'username': username, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userToken', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}

// Remove from localStorage: userInfo, 
// Nullify from store: userInfo, userAuth
export const logout = () => (dispatch) => {
    localStorage.removeItem('userToken')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
}

// getUserProfile
// Returns UserInfo (no token)
export const getUserProfile = (userToken) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        console.log("getUserProfile")
        console.log(userToken)
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userToken.access}`
            }
        }
        const { data } = await axios.get(`/api/users/profile/?id=${userToken.id}`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        localStorage.setItem('userProfile', JSON.stringify(data))


    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}

export const updateUserProfile = (formData, access) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${access}`
            }
        }
        const { data } = await axios.put(
            `/api/users/profile/update/`,
            formData,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}

export const setUser = (formData, access) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${access}`
            }
        }
        const { data } = await axios.put(
            `/api/users/profile/update/`,
            formData,
            config
        )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}

export const getUser = (access) => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${access}`
            }
        }
        const { data } = await axios.get(`/api/users/`, config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        }
        )
    }
}