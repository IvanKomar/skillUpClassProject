import React from "react"
import {keys} from 'lodash'
import products from '../Products/products'

const productMap = products.reduce((accObj, product)=>({
    ...accObj,
    [product.id]: product
}), {})

const CartPage = ({productsInCart}) => {
    return (
        <div>
        <h1 className="page-title"> Cart Page</h1>
        <div>
                {
                    keys(productsInCart).map((productId)=> (
                        <div>
                            <span>
                                {productMap[productId].name} 
                            </span>:
                            <span>
                                {productsInCart[productId]}
                            </span>
                            <span>: {productsInCart[productId].price} </span>
                        </div>
                    ))
                }
                    <div>   Total: $ {
                            keys(productsInCart).reduce((total, productId)=>(
                               total +( productMap[productId].price *  productsInCart[productId])
                            ), 0)
                            }
                            </div>
                </div>
        </div>

    )
}

export default CartPage


