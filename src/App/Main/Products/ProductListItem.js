import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'

class ProductListItem extends Component {
    render () {
        return (<div className="product-list-item"> 
        <div className="product-img"> <img  alt={`Зображення ${this.props.name}`} src={this.props.image}></img></div>
        <div className="product-title"> {this.props.name} </div>
        <div className="product-description"> {this.props.description}</div>
        <div className="product-features">Type: {this.props.type}</div>
        <div className="product-features">Capacity: {this.props.capacity} GB</div>
        <div className="product-quantity">
            <button>-</button>
            <input type="text" value="1" readOnly/>
            <button>+</button> </div>
        <div className="product-price"> {this.props.price} $</div>
        <button className="btn-add-to-cart">Add to Cart</button>
    </div>)
    }
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired, 
    description:PropTypes.string, 
    type:PropTypes.string.isRequired, 
    price:PropTypes.number.isRequired,
    capacity:PropTypes.number.isRequired,
    image:PropTypes.string,
}

ProductListItem.defaultProps ={
    name: "no description..." 
}

export default ProductListItem