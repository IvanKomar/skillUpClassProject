import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import products from './../../Main/Products/products'
class ProductListItem extends Component {

    state = {
            productCount: 1,
    }
    OnIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        }))
    }
    OnDecrementClick = ()=> {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1
        }))
    }
    
    render () {
        const {
            id,
            name,
            description = 'No description...',
            capacity,
            type,
            image, 
            price,
            addProductToCart,
        } = this.props

        return (<div className="product-list-item"> 
        <div className="product-img"> <img  alt={`Зображення ${name}`} src={image}></img></div>
        <div className="product-title"> {name} </div>
        <div className="product-description"> {description}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity: {capacity} GB</div>
        <div className="product-quantity">
            <button 
            onClick={this.OnDecrementClick} 
            disabled={this.state.productCount<=1}>-
            </button>
            <input type="text" value={this.state.productCount} readOnly/>
            <button 
            onClick={this.OnIncrementClick} 
            disabled={this.state.productCount>=10}> 
            +</button> </div>
        <div className="product-price"> {price} $</div>
        <button 
        onClick={()=>addProductToCart(id, this.state.productCount)}
        className="btn-add-to-cart" 
        >Add to Cart</button>
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


export default ProductListItem