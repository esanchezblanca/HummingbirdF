import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

const Login = () => {
    
    const history = useHistory();
    const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const login = {
        mail: form.mail.value,
        password: form.password.value,
      }
      await axios.post('https://hummingbirdback.herokuapp.com/api/user/login', login).then(res => {
        localStorage.setItem('userToken', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        notification.success({ message: 'Login correcto'})
        history.push('/dashboard')
      })
      .catch(err => {
        notification.error({ message: 'Error en el login', description:'No se pudo acceder'})
      })
      
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Error en el login', description: 'No se pudo acceder' })
    }
}
    
    
        return (
            <form className="divLogin" onSubmit={handleSubmit}>
                <h4 className="title1">Login</h4>
                <div className="container" >
                    <div>
                        <label className="labels">Correo</label>
                        <input type="email" name="mail" placeholder="Mail" />
                        <label className="labels">Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña" />

                        <input type="submit" className="submitButton" value="Login" />
                        <a href="/register">No tengo cuenta</a>

                    </div>
                </div>
            </form>
        )
    
}

export default Login;