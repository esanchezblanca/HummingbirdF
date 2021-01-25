import React from 'react';
import "./Register.css";
import axios from 'axios';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const history = useHistory();
    const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.target;
      const register = {
        name: form.name.value,
        lastName: form.lastName.value,
        mail: form.mail.value,
        password: form.password.value,
        phone: form.phone.value,
        year_id: form.year.value,
        role_id: 3

      }
      await axios.post('https://hummingbirdback.herokuapp.com/api/user/register', register).then(res => {
        notification.success({ message: 'Usuario registrado'})
        history.push('/login')
      })
      .catch(err => {
          console.log(err.response)
        notification.error({ message: 'Error en registro', description:'No se pudo completar el registro'})
      })
      
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Error en registro', description: 'No se pudo completar el registro' })
    }
  }
    return(
       
        <form className="divRegister" onSubmit={handleSubmit}>
            <h4 className="title1">Crear una cuenta</h4> 
          <div className="container" >
                <div>
                    <label className="labels">Nombre</label>
                    <input type="text" name="name" placeholder="Nombre"/>
                    <label className="labels">Apellido</label>
                    <input type="text" name="lastName" placeholder="Apellido" />
                    <label className="labels">Correo</label>
                    <input type="email" name="mail" placeholder="Mail" />
                    <label className="labels">Contraseña</label>
                    <input type="password" name="password" placeholder="Contraseña" />
                    <label className="labels">Teléfono</label>
                    <input type="number" name="phone" placeholder="Teléfono"/>

                    <label className="selector">Curso</label>
                        <select className="selector" name="year">
                            <option defaultValue value="1">1º ESO</option>
                            <option value="2">2º ESO</option>
                            <option value="3">3º ESO</option>
                            <option value="4">4º ESO</option>
                        </select>

                    
                        <input type="submit" className="submitButton" value="Sign Up"/>
                    <a href="/login">Ya tengo cuenta</a>
                    
                </div>
                </div>
        </form>
    );
}

export default Register;