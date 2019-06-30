import React from 'react'
import './ProductsList.css'
import ProductListItem from './ProductListItem'
import products from './products'
const ProductsList = ({addProductToCart}) => {

    return (
        <div>
            <h1 className="page-title">ProductsList</h1>
            <div className="row"> 
                {
                    products.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                   
                <div className="col-lg-6" key={id}>
                    <ProductListItem
                    image={image}
                    name={name}
                    description={description} 
                    type={type}
                    capacity={capacity}
                    price={price}
                    addProductToCart={addProductToCart}/>
                </div>    
                ))
                }            
                </div>
            </div>
    )
}

export default ProductsList