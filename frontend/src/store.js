import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { productListReducer, productDetailsReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { UserReducer } from './reducers/userReducers';



const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,   

    cart: cartReducer,

    user: UserReducer
})

const cartItemFromStorage = localStorage.getItem('cartItem') ?
    JSON.parse(localStorage.getItem('cartItem')) : ""

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { cartItem: cartItemFromStorage },
    user: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});


export default store 