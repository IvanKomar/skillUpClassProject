import React from "react"
import "./cart.css"


const HeaderCart = (
    {totalCount,cartPrice }
    ) => { 
    return (
    <div className="cart text-center">
        <div className="products-count">Total count: {totalCount}</div>
        <div className="products-price">Total price: ${cartPrice}</div>
    </div>
    )
}
export default HeaderCart