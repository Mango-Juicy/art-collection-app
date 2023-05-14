import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,

    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL,

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
            return { loading: true, categories: [] }

        case CATEGORY_LIST_SUCCESS:
            return {
                loading: false, 
                categories: action.payload,
            }

        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const configListReducer = (state = { config: [] }, action) => {
    switch (action.type) {
        case CONFIG_LIST_REQUEST:
            return { loading: true, config: [] }

        case CONFIG_LIST_SUCCESS:
            return {
                loading: false, 
                config: action.payload,
            }

        case CONFIG_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
