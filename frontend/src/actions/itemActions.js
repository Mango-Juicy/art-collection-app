import axios from 'axios'
import { useParams } from 'react-router-dom'
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
} from '../constants/itemConstants'



export const getItemsByCategory = (idCategory) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const { data } = await axios.get(`/api/item/?idCategory=${idCategory}`)

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getItemById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/item/?id=${id}`)
      

        dispatch({
            type: ITEM_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getItemsBySearch = (query) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const { data } = await axios.get(`/api/item/?query=${query}`)

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const getCategory = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })
        const { data } = await axios.get(`/api/category/`)
      
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
