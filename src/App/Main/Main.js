import React from "react"

import ProductsList from './Products/ProductsList'
const Main = () =>  {
    return (
    <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
                 filter
				</div>
				<div className="col-lg-9">
				<ProductsList/>
				</div>
			</div>
		</div>
	</main>
)
}
export default Main