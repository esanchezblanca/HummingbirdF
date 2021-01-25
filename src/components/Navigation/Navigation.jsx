import React, { Component } from 'react';
import './Navigation.css'
import Logo from '../../images/Logo.png';

import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={Logo} className="logoImg"></img>
                    <Link className="logoName" to="/">
                        Hummingbird
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-button">
                                
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-button">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-button"  >
                                <a className="nav-link" href="register">Register</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}





