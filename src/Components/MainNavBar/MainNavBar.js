import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand" to="/">Sports Web</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;