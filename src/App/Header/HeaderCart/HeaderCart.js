import React from "react"
import "./cart.css"


const HeaderCart = (
    {totalCount,totalPrice }
    ) => { 
    return (
    <div className="cart text-center">
        <div className="products-count">Total count: {totalCount}</div>
        <div className="products-price">Total price: ${totalPrice}</div>
    </div>
    )
}
export default HeaderCart