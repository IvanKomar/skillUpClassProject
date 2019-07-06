import React from "react"
import {keys} from 'lodash'
import "./cart.css"


const HeaderCart = (
    { ProductsInCart }
    ) => { 
    return (
    <div className="cart text-center">
        {
            keys(ProductsInCart).map((productId)=> (
                <div>
                    <span>
                        {productId} 
                    </span>:
                    <span>
                        {ProductsInCart[productId]}
                    </span>
                </div>
            ))
        }
        </div>
    
    )
}
export default HeaderCart