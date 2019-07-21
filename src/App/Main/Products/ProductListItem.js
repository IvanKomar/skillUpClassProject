import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'
import QuantityInput from '../../../features/quantity/QuantittyInput'
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
        <QuantityInput
        OnDecrementClick={this.OnDecrementClick}
        productCount={this.state.productCount}
        OnIncrementClick={this.OnIncrementClick}
        />
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