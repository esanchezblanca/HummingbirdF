import React, { Component } from 'react';
import './Navigation.css'
import Logo from '../../images/Logo.png';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { revokeToken } from '../../store/login/action';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}

        };
       
    }

    logout = () => {
        revokeToken("")
    }


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



                            {this.props.user ?
                                <div className="collapse navbar-collapse" id="navbarNav">
                                  {this.props.user.role_id !=3 ?  
                                  
                                    <li className="nav-button">
                                    <a className="nav-link" href="/task">Añadir tarea</a>
                                    </li>
                                    :
                                    <li className="nav-button">
                                    <a className="nav-link" href="/task"></a>
                                    </li>

                                  }
                                    <li activeClassName="activado" className="nav-button"  >
                                        <a className="nav-link" href="profile">Perfil</a>
                                    </li>
                                    <li activeClassName="activado" className="nav-button"  >
                                        <a className="nav-link" href="dashboard">Dashboard</a>
                                    </li>
                                    <li activeClassName="activado" className="nav-button"  >
                                        <a className="nav-link" href="/" onClick={() => this.logout()}>Logout</a>
                                    </li>

                                </div>


                                :
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <li className="nav-button">
                                        <a className="nav-link" href="/about">About Us</a>
                                    </li>
                                    <li activeClassName="activado" className="nav-button"  >
                                        <a className="nav-link" href="login">Login</a>
                                    </li>

                                    <li className="nav-button"  >
                                        <a className="nav-link" href="register">Register</a>
                                    </li>
                                </div>

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: JSON.stringify(state.user.user)
    }
}

export default connect(mapStateToProps)(Navigation);





