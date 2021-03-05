import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLink=()=>{
    return(
        <ul>
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='initial'>MA</NavLink></li>
        </ul>
    )
}

export default SignedInLink;