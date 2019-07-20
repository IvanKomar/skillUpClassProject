import React from "react"
import {Link} from 'react-router-dom'

import CartTotal from '../../../features/Cart/cartTotal'
import CartProductList from '../../../features/Cart/CartProductList'

import "./cart.css"

const HeaderCart = (
    { 
        productsInCart, 
       
     }
    ) => { 
    return (
    <div className="cart text-center">
         <CartProductList productsInCart={productsInCart}/> 
             <CartTotal productsInCart={productsInCart}/>
                
        
                <Link to='/cart'>Show cart</Link>
        </div>
    
    )
}
export default HeaderCart