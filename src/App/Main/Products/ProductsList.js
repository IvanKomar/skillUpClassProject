import React from 'react'
import './ProductsList.css'
import ProductListItem from './ProductListItem'

const ProductsList = () => {

    return (
        <div>
            <h1 className="page-title">ProductsList</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone SE"
                    description="This is iPhone SE" />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone X"
                    description="This is iPhone X" 
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone XL"
                    description="This is iPhone XL"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPad pro"
                    description="This is iPad pro"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsList