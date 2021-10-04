import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
    
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210731085719/How-Programming-Languages-are-Changing-the-World.png" alt="" width="150" height="50" class="d-inline-block align-text-top"/>
                
                    
                    <div  id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/details" className="nav-link" href="#">Course Details</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/about" className="nav-link" href="#">About</Link>
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;