import React, { useState , useEffect, useRef } from 'react';

const Navbar = ({ }) => {

    return (
        <div className='navbar'>
            <div className='path'>
                <a href='#'>enterprise</a> 
                <span> | </span>
                <a href='#'>copy</a>
            </div>
            <div className='user'>RS</div>
        </div>
    )

}

export default Navbar