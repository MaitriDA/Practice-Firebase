import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import './Navbar.css';

const Navbar=()=>{
    return(
        <div>
            <div className="navbar">
                <Link to ='/' className="brandLogo">Hello</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
        </div>
    )
}

export default Navbar;