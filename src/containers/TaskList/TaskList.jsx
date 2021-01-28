import React, { Component } from 'react';
import "./TaskList.css";
import axios from 'axios';
import { connect } from 'react-redux';

import saveTask from '../../store/task/action';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
            token: "",
            saveTask
        };

    }

    componentDidMount() {
        this.getTask();
    }

    openDetail(task) {
        console.log(task)
        this.props.saveTask(JSON.stringify(task))
    }


    deleteTask(id) {
        console.log("token en la lborrar", this.props.token)
        axios.delete(`https://hummingbirdback.herokuapp.com/api/task/${id}`, {
            headers: {
                'user-token': this.props.token
            }
        }).then(res => {
            this.getTask();
        })
            .catch(err => { })
    }

    getTask() {
        console.log("token en la lista", this.props.token)
        axios.get(`https://hummingbirdback.herokuapp.com/api/task`, {
            headers: {
                'user-token': this.props.token
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    taskList: res.data
                });
            })
            .catch(err => {
            })
    }

    render() {
        return (
            <section className="sidebar">
                <h1>Tareas pendientes:</h1>
                { this.state.taskList.map((task) => {
                    return (
                        <div className="list">

                            <div>
                                <p className="titleTaskEmpty">Curso:</p>
                                <div className="titleTask"> {task.year_id}</div>

                            </div>
                            <div>
                                <p className="titleTaskEmpty">Título:</p>
                                <div className="titleTask"> {task.title}</div>

                            </div>
                            
                            <button class="btn" onClick={() => this.openDetail(task)}>Ver</button>
                            <button class="btn" onClick={() => this.deleteTask(task.id)}>Borrar</button>
                        </div>

                    );
                })
                }
            </section>);
    }
}
const mapStateToProps = state => {
    console.log("Esto es el state", state);
    return {
        token: state.loginReducer.token
    }
}

export default connect(mapStateToProps, { saveTask })(TaskList);