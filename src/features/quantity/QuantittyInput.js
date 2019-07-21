import React from 'react'

const QuantityInput = ({
    OnDecrementClick,
    productCount,
    OnIncrementClick}) => {
    return (

        <div className="product-quantity">
        <button 
        onClick={()=>OnDecrementClick()} 
        disabled={productCount<=1}>-
        </button>
        <input type="text" value={productCount} readOnly/>
        <button 
        onClick={()=>OnIncrementClick()} 
        disabled={productCount>=10}> 
        +</button> </div>
    )
}
export default QuantityInput 