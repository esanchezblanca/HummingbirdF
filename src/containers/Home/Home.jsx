import React, { Component } from 'react'
import './Home.css';
import { Link, Button } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="titleContainer">
                    <h1 className="welcomeMsg">Bienvenido a Hummingbird</h1>
                    <h2 className="welcomeMsg">¿Qué quieres hacer?</h2>
                </div>
                <div className="buttonContainer">
                    <Link to="/register">
                        <button className="homeButton" renderAs="button">
                            <span>Crear una cuenta</span>
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="homeButton" renderAs="button">
                            <span>Acceder a mi área</span>
                        </button>
                    </Link>

                </div>
            </div>
        )
    }
}
