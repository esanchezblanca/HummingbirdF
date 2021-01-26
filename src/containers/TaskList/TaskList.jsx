import React, { Component } from 'react';
import "./TaskList.css";
import axios from 'axios';





export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token : localStorage.getItem('userToken'),
            taskList: []
        };
        
    }

    redirectToHome = () => {
   
       }
   
    
    componentDidMount() {
        this.getTask();
    }


    openDetail() {
        
    }

    deleteTask(id){
        
        axios.delete(`https://hummingbirdback.herokuapp.com/api/task/${id}`, {
            headers: {
                'user-token': this.state.token
            }
        }).then(res => {
            this.getTask();
        })
        .catch(err => {})
    }

    getTask() {
        axios.get(`https://hummingbirdback.herokuapp.com/api/task`, {
            headers: {
                'user-token': this.state.token
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    taskList: res.data
                });
            })
            .catch(err => {})
    }

    render() {
        return (
            <section className="sidebar">
                <h1>Tareas pendientes:</h1>
                { this.state.taskList.map((task) => {
                    return (
                        <div className="list" onClick={() => this.openDetail()}>
                            <div>
                                <p className="titleTaskEmpty">Título:</p>
                                <div className="titleTask"> {task.title}</div>
                                <button class="btn" onClick={() => this.deleteTask(task.id)}>Borrar</button>
                            </div>
                        </div>

                    );
                })
                }
            </section>);
    }
}