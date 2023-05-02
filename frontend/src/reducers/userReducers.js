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

    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";



export const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST || USER_REGISTER_REQUEST || USER_DETAILS_REQUEST || USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS || USER_REGISTER_SUCCESS || USER_DETAILS_SUCCESS || USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                success: true
            }

        case USER_LOGIN_FAIL || USER_REGISTER_FAIL || USER_DETAILS_FAIL || USER_UPDATE_PROFILE_FAIL:
            return { 
                loading: false, 
                error: action.payload, 
                success: false
            }

        case USER_LOGOUT || USER_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}
