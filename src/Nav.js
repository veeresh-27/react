import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return ( <
        nav >
        <
        ul >
        <
        Link to = '/' >
        <
        li > Home <
        /li></Link >
        <
        Link to = '/about' > <
        li >
        About Me <
        /li></Link >
        <
        Link to = '/contact' > <
        li >
        Contact Me <
        /li></Link > < /
        ul > <
        /nav>
    )
}

export default Nav;