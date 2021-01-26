import React, { Component } from 'react';
import "./Dashboard.css";
// import { Card } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Taskbar from '../../components/Taskbar/Taskbar';
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
                <Taskbar />
                <div className="taskList">
                    <TaskList />
               
                    <TaskDetail/>
                </div>

            </section>);
    }
}