import React, { Component } from 'react';
import "./TaskDetail.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    componentDidMount() {
      //  this.getTask();
    }


    getTask() {
        const token = localStorage.getItem('userToken')
        axios.get(`https://hummingbirdback.herokuapp.com/api/task`, {
            headers: {
                'user-token': token
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    taskList: res.data
                });
            })
            .catch(err => { })
    }

    render() {
        return (
            <section>
                <h1>Tareas en detalle:</h1>
                { this.state.taskList.map((task) => {
                    return (
                        <div>
                            
                            {/* <p>Publicado por: {user.name, user.lastName} </p> */}
                            <p>Título: {task.title} </p>
                            <p>Descripción: {task.description} </p>
                        </div>




                    );
                })
                }
            </section>);
    }
}