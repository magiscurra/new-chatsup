import React, { useState } from 'react';
import './navBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={isOpen ? 'nav-active' : ''}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Privacy policy</a></li>
                </ul>
                {isOpen && (
                    <div className="cross-icon" onClick={toggleMenu}>
                        <div className="bar" style={{ transform: 'rotate(45deg)', margin: '4px 0' }}></div>
                        <div className="bar" style={{ opacity: 0 }}></div>
                        <div className="bar" style={{ transform: 'rotate(-45deg)', margin: '4px 0' }}></div>
                    </div>
                )}
            </nav>
        </div> 
    );
};

export default NavBar;