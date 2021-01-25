import React, { Component } from 'react';
import "./Dashboard.css";
// import { Card } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    componentDidMount() {
        this.getTask();
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
                <h1>Estas son tus tareas:</h1>
                { this.state.taskList.map((task) => {
                    return (
                        <div>
                            <p>Título: {task.title} </p>
                            <p>Descripción: {task.description}</p>
                        </div>


                    );
                })
                }
            </section>);
    }

}