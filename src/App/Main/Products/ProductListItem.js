import React from 'react'
import './ProductListItem.css'

const ProductListItem = ( {
    name,
    description,
    type,
    capacity,
    price
}) => {
    return (
        <div className="product-list-item"> 
            <div className="product-title"> {name} </div>
            <div className="product-description"> {description}</div>
            <div className="product-features">{type}</div>
            <div className="product-features">{capacity}</div>
            <div className="product-price"> {price}</div>
            <button className="btn-add-to-cart">Add to Cart</button>
        </div>
    )
}

export default ProductListItem