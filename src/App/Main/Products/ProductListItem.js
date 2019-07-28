import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './ProductListItem.css'
import QuantityInput from '../../../features/quantity/QuantittyInput'
import {connect} from 'react-redux'
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
    onLikeChange = ()=> {
        if(this.props.isLiked) {
            this.props.removeLike(this.props.id)
        } 
        else {
            this.props.addLike(this.props.id)
        }
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
            isLiked=false,
        } = this.props

        return (<div className="product-list-item"> 
        <div className="product-img"> <img  alt={`Зображення ${name}`} src={image}></img></div>
        <button onClick={()=>this.onLikeChange()}>
    {isLiked?<span>&#9829;</span>:<span>&#9825;</span> }</button>
        <div className="product-title"> {name} </div>
        <div className="product-description"> {description}</div>
        <div className="product-features">Type: {type}</div>
        <div className="product-features">Capacity: {capacity} GB</div>
        <QuantityInput
        minValue={1}
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

const mapStateToProps = (state, props) => ({
    isLiked: state[props.id],
})

    const mapDispatchToProps = (dispatch) => ({
        addLike: (id)=>dispatch ({
            type: 'LIKE',
            id:id
        }),
        removeLike: (id)=>dispatch ({
            type: 'DISLIKE',
            id:id
        })
})

export default connect(mapStateToProps,mapDispatchToProps) (ProductListItem)