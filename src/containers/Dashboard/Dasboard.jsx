import React, { Component } from 'react';
import "./Dashboard.css";

import TaskList from '../../containers/TaskList/TaskList';
import TaskDetail from '../../containers/TaskDetail/TaskDetail';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    componentDidMount() {
      
    }


 

    render() {
        return (
            <section>
                <div className="taskList">
                    <TaskList />
               
                    <TaskDetail/>
                </div>

            </section>);
    }
}