import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

//Estilos
import "./Task.css";
import { notification } from 'antd';
import 'antd/dist/antd.css';

//Redux



//Este componente está pensado para crear una tarea
const Task = ({token}) => {

    const history = useHistory();
    const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = JSON.parse(localStorage.getItem('user'));

      // const token = localStorage.getItem('userToken')
      console.log("esto es un usuario", user);
      console.log("esto es un token", token);
      const form = event.target;
      const addTask = {
        title: form.title.value,
        description: form.description.value,
        year_id: form.year.value,
        user_id: user.id

      }
      
      console.log("Esto es la tarea", addTask)

      await axios.post('https://hummingbirdback.herokuapp.com/api/task', addTask,{
        headers: {
        
         'user-token': token
        }
      })
      .then(res => {
        console.log(res)
        notification.success({ message: 'Tarea añadida'})
        history.push('/dashboard')
      })
      .catch(err => {
          console.log(err.response)
        notification.error({ message: 'Error al crear la tarea', description:'No se pudo crear la tarea'})
      })
      
    }
    catch (error) {
      console.error(error)
      notification.error({ message: 'Error al crear la tarea', description: 'No se pudo crear la tarea' })
    }
  }
    return(
       
        <form className="divRegister" onSubmit={handleSubmit}>
            <h4 className="title1">Crear nueva tarea</h4> 
          <div className="container" >
                <div>
                    <label className="labels">Título</label>
                    <input type="text" name="title" placeholder="Nombre"/>
                    <label className="labels">Descripción</label>
                    <textarea className="textarea" name="description" placeholder="Introduce la descripción" />             

                    <label className="selector">Curso</label>
                        <select className="selector" name="year">
                            <option defaultValue value="1">1º ESO</option>
                            <option value="2">2º ESO</option>
                            <option value="3">3º ESO</option>
                            <option value="4">4º ESO</option>
                        </select>

                    
                        <input type="submit" className="submitButton" value="Añadir tarea"/>

                </div>
                </div>
        </form>
    );
 }
 
const mapStateToProps = state => {
  return {
      token: state.loginReducer.token
  }
}

export default connect(mapStateToProps) (Task);
