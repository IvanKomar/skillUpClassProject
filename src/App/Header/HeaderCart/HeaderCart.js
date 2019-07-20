import React from "react"
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import "./cart.css"
import products, {getProductsMap} from './../../Main/Products/products'
import CartTotal from '../../../features/Cart/cartTotal'



const HeaderCart = (
    { 
        productsInCart, 
        productMap = getProductsMap(products),
     }
    ) => { 
    return (
    <div className="cart text-center">
        {
            keys(productsInCart).map((productId)=> (
                <div>
                    <span>
                        {productMap[productId].name} 
                    </span>:
                    <span>
                        {productsInCart[productId]}
                    </span>
                </div>
            ))
        }
             <CartTotal productsInCart={productsInCart}/>
                
        
                <Link to='/cart' className="btn-add-to-cart">Show cart</Link>
        </div>
    
    )
}
export default HeaderCart