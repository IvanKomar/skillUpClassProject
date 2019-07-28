import { combineReducers } from 'redux'
import productLikeReducer from './productLikeReducer'
import cartReducer from './cartReducer'
const rootReducer = combineReducers({

    likeProductsState:productLikeReducer,
    productsInCart: cartReducer,

})

export default rootReducer