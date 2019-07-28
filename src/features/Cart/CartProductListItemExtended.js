import React from 'react'
import './CartProductListItemExtended.css'
import QuantityInput from '../quantity/QuantittyInput'
import {connect} from 'react-redux'

    const CartProductListItemExtended = ({
        product,
        productCount,
        removeProductFromCart,
        ChangeCountInCart,
        isLiked
    }) => (
   
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span> 
                    </p>
                    <button>{isLiked?<span>&#9829;</span>:<span>&#9825;</span> }</button>
                    <QuantityInput
                    minValue={0}
                    ChangeCountInCart={ChangeCountInCart}
                    OnDecrementClick={()=>{
                        if (productCount===1) {
                            removeProductFromCart(product.id)
                        } 
                        else {
                            ChangeCountInCart(product.id,productCount -1)
                        }
                        }}
                    productCount={productCount}
                    OnIncrementClick={()=>ChangeCountInCart(product.id,productCount +1)}
                    />
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                  <button onClick={()=>removeProductFromCart(product.id)}>Remove product</button>
                </div>
            </div>
        </div>
)

const mapStateToProps = (state, props) => ({
    isLiked: state.likeProductsState[props.product.id],
})

export default connect(mapStateToProps) (CartProductListItemExtended)

