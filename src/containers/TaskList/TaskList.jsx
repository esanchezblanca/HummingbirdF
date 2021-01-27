import React, { Component } from 'react';
import "./TaskList.css";
import axios from 'axios';
import { connect } from 'react-redux';



class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
            token: ""
        };

    }

    redirectToHome = () => {

    }


    componentDidMount() {
        console.log("token precarga",this.props.token.token)
        this.getTask();
    }


    openDetail() {

    }

    deleteTask(id) {
        axios.delete(`https://hummingbirdback.herokuapp.com/api/task/${id}`, {
            headers: {
                'user-token': this.props.token.token
            }
        }).then(res => {
            this.getTask();
        })
            .catch(err => { })
    }

    getTask() {
        axios.get(`https://hummingbirdback.herokuapp.com/api/task`, {
            headers: {
                'user-token': this.props.token.token
            }
        })
            .then(res => {
                console.log(res)
                this.setState({
                    taskList: res.data
                });
            })
            .catch(err => {
                console.log(err)
             })
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
const mapStateToProps = state => {
    return {
        token: state.token
   }
}

export default connect(mapStateToProps)(TaskList);