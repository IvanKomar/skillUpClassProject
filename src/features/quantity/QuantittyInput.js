import React from 'react'

const QuantityInput = ({
    OnDecrementClick,
    productCount,
    OnIncrementClick,
    minValue}) => {
    return (

        <div className="product-quantity">
        <button 
        onClick={()=>OnDecrementClick()} 
        disabled={productCount<=minValue}>-
        </button>
        <input type="text" value={productCount} readOnly/>
        <button 
        onClick={()=>OnIncrementClick()} 
        disabled={productCount>=10}> 
        +</button> </div>
    )
}
export default QuantityInput 