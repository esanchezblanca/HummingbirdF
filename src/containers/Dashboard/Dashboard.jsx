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
            token: "",
            taskList: []
        };
    }



    render() {
        return (


            <div>
                {this.props.token ?
                    <div>
                        <div className="taskList">

                            <TaskList />

                            <TaskDetail />

                        </div></div>
                    :
                    <div>
                        {useHistory.push("/")}
                    </div>
                }

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        token: state.loginReducer.token
    }
}

export default connect(mapStateToProps)(Dashboard);
