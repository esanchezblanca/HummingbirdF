import React from 'react';
import "./Task.css";
import axios from 'axios';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';


const Task = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = localStorage.getItem('user');
      const form = event.target;
      const addTask = {
        title: form.title.value,
        description: form.description.value,
        year_id: form.year_id.value,
        user_id: user.id

      }
      await axios.post('https://hummingbirdback.herokuapp.com/api/task', addTask).then(res => {
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
                    <textarea className="textarea"  placeholder="Introduce la descripción" />             

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

export default Task;
