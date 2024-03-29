import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,

    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL,

    ITEM_UPDATE_REQUEST,
    ITEM_UPDATE_SUCCESS,
    ITEM_UPDATE_FAIL,

    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,

    CONFIG_LIST_REQUEST,
    CONFIG_LIST_SUCCESS,
    CONFIG_LIST_FAIL 
} from '../constants/itemConstants'


export const itemListReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST:
            return { loading: true, items: [] }

        case ITEM_LIST_SUCCESS:
            return {
                loading: false,
                items: action.payload,
            }

        case ITEM_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const itemDetailsReducer = (state = { item: { reviews: [] } }, action) => {
    switch (action.type) {
        case ITEM_DETAILS_REQUEST:
            return { loading: true, ...state }

        case ITEM_DETAILS_SUCCESS:
            return {
                loading: false, item: action.payload,
            }

        case ITEM_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loadingCategory: true, categories: [] }

        case CATEGORY_LIST_SUCCESS:
            return {
                loadingCategory: false, 
                categories: action.payload,
            }

        case CATEGORY_LIST_FAIL:
            return { loadingCategory: false, errorCategory: action.payload }

        default:
            return state
    }
}

export const configListReducer = (state = { configs: [] }, action) => {
    switch (action.type) {
        case CONFIG_LIST_REQUEST:
            return { loadingConfig: true, configs: [] }

        case CONFIG_LIST_SUCCESS:
            return {
                loadingConfig: false, 
                configs: action.payload,
            }

        case CONFIG_LIST_FAIL:
            return { loadingConfig: false, errorConfig: action.payload }

        default:
            return state
    }
}


// Confirmation Response
export const responseSetItemReducer = (state = { status: {} }, action) => {
    switch (action.type) {
        case ITEM_UPDATE_REQUEST:
            return  { loadingResponse: true, status: {} }

        case ITEM_UPDATE_SUCCESS:
            return {
                loadingResponse: false, 
                status: action.payload,
            }

        case ITEM_UPDATE_FAIL:
            return { loadingResponse: false, errorResponse: action.payload }

        default:
            return state
    }
}