import React from "react"
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
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
            <div>   Total: $ {
                    keys(productsInCart).reduce((total, productId)=>(
                       total +( productMap[productId].price *  productsInCart[productId])
                    ), 0)
                    }
                    </div>
                
        
                <Link to='/cart' className="btn-add-to-cart">Show cart</Link>
        </div>
    
    )
}
export default HeaderCart