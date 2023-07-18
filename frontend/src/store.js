import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { itemListReducer, itemDetailsReducer, categoryListReducer, configListReducer} from './reducers/itemReducers';
import { cartReducer } from './reducers/cartReducers';
import { UserReducer, UserAuthReducer, UserListReducer } from './reducers/userReducers';



const reducer = combineReducers({
    
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,  
    
    categoryList: categoryListReducer,

    configList: configListReducer,

    user: UserReducer,
    userAuth: UserAuthReducer,
    userList: UserListReducer,

    cart: cartReducer    
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const userTokenFromStorage = localStorage.getItem('userToken') ?
    JSON.parse(localStorage.getItem('userToken')) : null

const initialState = {
    user: { userInfo: userInfoFromStorage },
    userAuth: { userToken: userTokenFromStorage }
}

const middleware = [thunk]

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});


export default store 