import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/messages" className="navbar-brand">
                React CRUD & Routing
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to="/messages"
                        className="nav-link" 
                        activeClassName="active"
                        >Messages</NavLink>

                </li>

                <li className="nav-item">
                    <NavLink
                        to="/new-message"
                        className="nav-link" 
                        activeClassName="active"
                        >New Message</NavLink>

                </li>

            </ul>
        </div>
    </nav>
)

export default Header;