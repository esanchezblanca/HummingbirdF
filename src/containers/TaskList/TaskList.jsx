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
        this.props.saveTask(task)
    }


    deleteTask(id) {
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
            <section className="sidebar" key="1">
                <h1 className="pending">Tareas pendientes</h1>
                { this.state.taskList.map((value, key) => {
                    return (
                        <div className="list" key={key}>

                            <div className="shownInfo">
                                <p className="titleTaskEmpty">Curso:</p>
                                <div className="titleTask"> {value.year_id}</div>

                            </div>
                            <div className="shownInfo">
                                <p className="titleTaskEmpty">Título:</p>
                                <div className="titleTask"> {value.title}</div>

                            </div>
                            
                            <button className="btn" key="task openDetail" onClick={() => this.openDetail(value)}>Ver</button>
                            <button className="btn" key="task2"onClick={() => this.deleteTask(value.id)}>Borrar</button>
                            
                           
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