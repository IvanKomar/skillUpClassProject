import React from 'react'
import './ProductListItem.css'

const ProductListItem = (props) => {

    return (
        <div className="product-list-item">
            <div className="product-title"> {props.name} </div>
            <div className="product-description"> {props.description}</div>
            <div className="product-features">{props.type}</div>
            <div className="product-features">{props.capacity}</div>
            <div className="product-price"> {props.price}</div>
            <button className="btn-add-to-cart">Add to Cart</button>
            {console.log (props)}
        </div>
    )
}

export default ProductListItem