import React from "react"
import CartTotal from '../../../features/Cart/cartTotal'
import CartProductList from '../../../features/Cart/CartProductList'
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended'
import {connect} from 'react-redux'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    ChangeCountInCart
}) => {
    return (
        <div>
        <h1 className="page-title"> Cart Page</h1>
        <div>
               <CartProductList 
               removeProductFromCart={removeProductFromCart}
               productsInCart={productsInCart}
               CartListItem={CartProductListItemExtended}
               ChangeCountInCart={ChangeCountInCart}
               />
                    <CartTotal productsInCart={productsInCart}/>
                </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    productsInCart:state.productsInCart
})

export default connect(mapStateToProps)(CartPage)



