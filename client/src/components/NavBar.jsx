import React from 'react';

const NavBar = () => {
    return (
        <nav style={{ position: 'fixed', top: 0, right: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: 'lightgray', padding: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
