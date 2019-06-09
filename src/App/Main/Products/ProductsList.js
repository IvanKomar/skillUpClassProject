import React from 'react'
import './ProductsList.css'
import ProductListItem from './ProductListItem'

const ProductsList = () => {

    return (
        <div>
            <h1 className="page-title">ProductsList</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem/>
                </div>
                <div className="col-lg-6">
                    <ProductListItem/>
                </div>
                <div className="col-lg-6">
                    <ProductListItem/>
                </div>
                <div className="col-lg-6">
                    <ProductListItem/>
                </div>
            </div>
        </div>
    )
}

export default ProductsList