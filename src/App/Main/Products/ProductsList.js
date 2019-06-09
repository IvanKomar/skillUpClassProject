import React from 'react'
import './ProductsList.css'
import ProductListItem from './ProductListItem'
import products from './products'
const ProductsList = () => {

    return (
        <div>
            <h1 className="page-title">ProductsList</h1>
            <div className="row"> 
                {
                    products.map( (product) => (
                   
                <div className="col-lg-6">
                    <ProductListItem
                    name={product.name}
                    description={product.description} 
                    type={product.type}
                    capacity={product.capacity}
                    price={product.price}/>
                </div>    
                ))
                }            
                </div>
            </div>
    )
}

export default ProductsList