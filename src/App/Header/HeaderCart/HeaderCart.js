import React from "react"
import {keys} from 'lodash'
import "./cart.css"


const HeaderCart = (
    { productsInCart }
    ) => { 
    return (
    <div className="cart text-center">
        {
            keys(productsInCart).map((productId)=> (
                <div>
                    <span>
                        {productId} 
                    </span>:
                    <span>
                        {productsInCart[productId]}
                    </span>
                </div>
            ))
        }
        </div>
    
    )
}
export default HeaderCart