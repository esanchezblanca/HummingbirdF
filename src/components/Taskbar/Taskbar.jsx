import React, { Component } from 'react';
import './Taskbar.css'

import { Link } from 'react-router-dom';

export default class Taskbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-button">

                            <a className="nav-link" href="/task">Añadir tarea</a>
                        </li>
                        <li className="nav-button">
                            <a className="nav-link" href="/profile">Ver perfil</a>
                        </li>
                        

                    </ul>
                </div>
            </nav>

        )
    }
}