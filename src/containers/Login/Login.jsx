import React, { useRef } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//Estilos
import './Login.css';
import { notification } from 'antd';
import 'antd/dist/antd.css';

//Redux
import {saveToken} from '../../store/login/action';
import saveUser from '../../store/user/action';


const Login = ({saveToken,saveUser}) => {
    
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

        saveToken(res.data.token);
        saveUser(JSON.stringify(res.data.user));
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

export default connect(null, {saveToken, saveUser}) (Login);