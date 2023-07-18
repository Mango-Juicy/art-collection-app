import {
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGOUT,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_LIST_RESET,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";



export const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { 
                loading: true,
                ...state
            }

        case USER_DETAILS_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success: true
            }

        case USER_DETAILS_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                success: false
            }

        case USER_LOGOUT:
            return {
                userInfo: null
            }

        default:
            return state
    }
}

export const UserAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { 
                loading: true,
                userToken: null
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userToken: action.payload,
                success: true
            }

        case USER_LOGIN_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                success: false
            }

        case USER_LOGOUT:
            return {
                userToken: null
            }

        default:
            return state
    }
}

// MANAGER LIST
export const UserListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true, users: [] }

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            }

        case USER_LIST_FAIL:
            return { 
                loading: false, 
                error: action.payload
            }

        case USER_LIST_RESET:
            return state

        default:
            return state
    }
}
