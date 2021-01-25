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
        notification.success({ message: 'Registered'})
        history.push('/login')
      })
      .catch(err => {
          console.log(err.response)
        notification.error({ message: 'Cannot register', description:'dgfdfg'})
      })
      
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Cannot register', description: 'Error on register' })
    }
  }
    return(
       
        <form className="divRegister" onSubmit={handleSubmit}> 
          <div className="row " id="Body">
                <div className="registerGralDiv">
                    <h4>Register</h4>


                    <label>Nombre</label>
                    <input type="text" name="name" placeholder="Nombre"/>
                    <label>Apellido</label>
                    <input type="text" name="lastName" placeholder="Apellido" />
                    <label>Correo</label>
                    <input type="email" name="mail" placeholder="Mail" />
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Contraseña" />
                    <label>Teléfono</label>
                    <input type="number" name="phone" placeholder="Teléfono"/>
                    <div className="select">
                        <label>Curso</label>
                        <select name="year">
                            <option defaultValue value="1">1º ESO</option>
                            <option value="2">2º ESO</option>
                            <option value="3">3º ESO</option>
                            <option value="4">4º ESO</option>
                        </select>
                    </div>

                    <input type="submit" className="button" value="Sign Up"/>
                    <a href="/login">Login</a>
                </div>
                </div>
        </form>
    );
}

export default Register;