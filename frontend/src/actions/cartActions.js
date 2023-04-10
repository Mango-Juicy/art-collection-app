import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM

} from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data
        }
    })

    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

