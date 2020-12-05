import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
    <div className='footer'>
       <div className='link-container'>
            <Link to='/'>Home</Link>
            <Link>About</Link>
       </div>

    </div>
)

export default Footer