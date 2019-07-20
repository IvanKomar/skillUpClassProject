import React from 'react'

const CartProductListItem = ({
    productCount,
    product,    
}) => {

    return (
        <div>
           <span>{product.name}</span> : <span> {productCount}</span>   
        </div>
    )
}
export default CartProductListItem