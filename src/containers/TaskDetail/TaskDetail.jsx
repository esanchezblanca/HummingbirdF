import React, { Component } from 'react';
import "./TaskDetail.css";
import { connect } from 'react-redux';



const TaskDetail = ({ task }) => {

    console.log(task)
    

    return (
        <div className="detailDiv">
            <h1>Esta es tu tarea:</h1>
            <div>
                <p>Título</p>
                <p className="titleTask"> {task.title}</p>
            </div>
            <div>
                <p>Descipción</p>
                <p className="titleTask"> {task.description}</p>
            </div>
            <div>
                <p>Curso</p>
                <p className="titleTask"> {task.year_id}</p>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        task: state.task
    }
}
export default connect(mapStateToProps)(TaskDetail);