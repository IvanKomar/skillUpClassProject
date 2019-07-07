import React from "react"
import logo from './logo.png'
import {Link} from 'react-router-dom'

const HeaderLogo = () => {
    return (
    <div className="logo">
       <Link to='/'>
           <img src={logo} alt="logo"/>
        </Link>  
    </div>
    )
}           
export default HeaderLogo