import React from "react"
import "./reset.css"
import "./base.css"
import "./header.css"
import "./menu.css"
import "./cart.css"

import Header from './Header'
import Main from './Main'
import Footer from './Footer'


const App = () => {
    return(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
    )
}

export default App
