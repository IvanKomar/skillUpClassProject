import React from "react"
import {keys} from 'lodash'
import "./cart.css"
import products from './../../Main/Products/products'

const productMap = products.reduce((accObj, product)=>({
    ...accObj,
    [product.id]: product
}), {})


const HeaderCart = (
    { productsInCart }
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
                total: $ {
                    keys(productsInCart).reduce((total, productId)=>(
                       total +( productMap[productId].price *  productsInCart[productId])
                    ), 0)
                    }
        
        </div>
    
    )
}
export default HeaderCart