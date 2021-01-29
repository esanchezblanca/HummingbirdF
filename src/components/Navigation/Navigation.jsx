import React, { Component } from 'react';
import './Navigation.css'
import Logo from '../../images/Logo.png';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import  { saveToken }  from '../../store/login/action'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
           token: "",
           saveToken
        };
       
    }

    logout = () => {
        this.props.saveToken("")
        console.log("token en navigation ",this.props.token)
    }


    render() {
        return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={Logo} className="logoImg"></img>
                    <NavLink className="logoName" to="/">
                        Hummingbird
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" key="navbarNav">
                        <ul className="navbar-nav ml-auto">



                            {this.props.token !== "" ?
                                <div className="collapse navbar-collapse" key="navbarNav">
                                  
                                  
                                    <li className="nav-button" key="nav1">
                                    <a className="nav-link" href="/task">Añadir tarea</a>
                                    </li>
                                    
                                    <li className="nav-button" key="nav2">
                                    <a className="nav-link" href="/task"></a>
                                    </li>

                                  
                                    <li className="nav-button" key="nav3" >
                                        <a className="nav-link" href="profile">Perfil</a>
                                    </li>
                                    <li className="nav-button"  key="nav4">
                                        <a className="nav-link" href="dashboard">Dashboard</a>
                                    </li>
                                    <li className="nav-button"  key="nav5">
                                        <a className="nav-link" href="/" onClick={() => this.logout()}>Logout</a>
                                    </li>

                                </div>


                                :
                                <div className="collapse navbar-collapse" key="navbarNav">
                                    <li className="nav-button" key="6">
                                        <a className="nav-link" href="/about">About Us</a>
                                    </li>
                                    <li className="nav-button"  key="7" >
                                        <a className="nav-link" href="login">Login</a>
                                    </li>

                                    <li className="nav-button"  key="8">
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
    console.log(state)
    return {
        token: state.loginReducer.token
    }
}

export default connect(mapStateToProps,{saveToken})(Navigation);





