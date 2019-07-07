import React from "react"
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'
import CartPage from '../Main/Cart/CartPage'

const Main = ({addProductToCart}) =>  {
    return (
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
                 filter
				</div>
				<div className="col-lg-9">
				{/* <ProductsList
				addProductToCart={addProductToCart}/> */}
				<Route path='/' exact component={ProductsList}/>
				<Route path='/cart' component={CartPage}/>
				</div>
			</div>
		</div>
	</main>
)
}
export default Main