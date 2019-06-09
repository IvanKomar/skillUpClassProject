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
                    description="This is iPhone SE" 
                    type="phone"
                    capacity="16 GB"
                    price="300 $"/>
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone X"
                    description="This is iPhone X"
                    type="phone"
                    capacity="64 Gb"
                    price="800 $" 
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone XL"
                    description="This is iPhone XL"
                    type="phone"
                    capacity=" 128 Gb"
                    price="1000 $" 
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPad pro"
                    description="This is iPad pro"
                    type="tablet"
                    capacity="64 Gb"
                    price="1200 $" 
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsList