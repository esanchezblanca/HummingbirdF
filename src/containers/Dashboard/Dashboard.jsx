import React, { Component } from 'react';
import "./Dashboard.css";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TaskList from '../../containers/TaskList/TaskList';
import TaskDetail from '../../containers/TaskDetail/TaskDetail';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        };
    }



    render() {
        return (

            <div>
                <div className="taskList">
                    <TaskList />
                    <TaskDetail />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(Dashboard);
