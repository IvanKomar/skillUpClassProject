import React from "react"
import CartTotal from '../../../features/Cart/cartTotal'
import CartProductList from '../../../features/Cart/CartProductList'
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
   
}) => {
    return (
        <div>
        <h1 className="page-title"> Cart Page</h1>
        <div>
               <CartProductList 
               productsInCart={productsInCart}
               CartListItem={CartProductListItemExtended}
               />
                    <CartTotal productsInCart={productsInCart}/>
                </div>
        </div>

    )
}

export default CartPage


