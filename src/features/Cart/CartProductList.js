import React from 'react'
import {keys} from 'lodash'
import products, {getProductsMap} from '../../App/Main/Products/products'
import CartProductListItem from './CartProductListItem';


const CartProductList = ({
    productsInCart,
    productsMap=getProductsMap(products),
    CartListItem = CartProductListItem,
    removeProductFromCart,
    ChangeProductQuantity
    }) => {    
    return (
    <div>
    {  
          keys(productsInCart).map((productId)=> (
            <CartListItem
            key={productId}
            product={productsMap[productId]}
            productCount={productsInCart[productId]}
            removeProductFromCart={removeProductFromCart}
            ChangeProductQuantity={ChangeProductQuantity}
            />
        ))
    }
    </div>
    )
    }
export default CartProductList
