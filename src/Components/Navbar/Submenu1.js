import React from 'react';
import './Submenu.css';

const Submenu1 = () => {

    return (
        <ul className="nav__submenu uppercase">
            <li className="nav__submenu-item ">
                <a className='uppercase font-semibold'>Our Company</a>
            </li>
            <li className="nav__submenu-item ">
                <a className='uppercase font-semibold'>Our Team</a>
            </li>
            <li className="nav__submenu-item ">
                <a className='uppercase font-semibold'>Our Portfolio</a>
            </li>
        </ul>
    );
};

export default Submenu1;