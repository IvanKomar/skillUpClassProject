import React from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'


const ProductListItem = ( {
    name,
    description = "No description...",
    type,
    capacity,
    price,
    image,
}) => {
    return (
        <div className="product-list-item"> 
            <div className="product-img"> <img  alt={`Зображення ${name}`} src={image}></img></div>
            <div className="product-title"> {name} </div>
            <div className="product-description"> {description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text" value="1" readOnly/>
                <button>+</button> </div>
            <div className="product-price"> {price} $</div>
            <button className="btn-add-to-cart">Add to Cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired, 
    description:PropTypes.string, 
    type:PropTypes.string.isRequired, 
    price:PropTypes.number.isRequired,
    capacity:PropTypes.number.isRequired,
    image:PropTypes.string,
}


export default ProductListItem