import React from 'react';
import "./TaskDetail.css";
import { connect } from 'react-redux';



const TaskDetail = ({ task }) => {

    console.log("tasktitle", task)


    return (
        <div className="detailDiv">


            <h1 className="openTask">Esta es tu tarea:</h1>
            <div className="card">
                {
                    task ?
                        <div>
                            <div className="cardUnit">
                                <p className="tasktitle">Título:</p>
                                <p className="description"> {task.title}</p>
                            </div>
                            <div className="cardUnit">
                                <p className="tasktitle">Descipción:</p>
                                <p className="description"> {task.description}</p>
                            </div>
                            <div className="cardUnit">
                                <p className="tasktitle">Curso</p>
                                <p className="description"> {task.year_id}</p>
                            </div>

                            <div className="cardUnit">
                                <p className="tasktitle">Título:</p>
                                <p className="description"> {task.title}</p>
                            </div>
                        </div>
                        :
                        <div>seleccione una tarea</div>
                }



            </div>



        </div>
    )
}

const mapStateToProps = state => {
    console.log("NUEVO STATE", state)
    return {
        task: JSON.parse(state.taskReducer.task)
    }
}
export default connect(mapStateToProps)(TaskDetail);