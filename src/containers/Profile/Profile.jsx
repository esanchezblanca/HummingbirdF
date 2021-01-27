import React, { useRef } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import './Profile.css';
import { notification } from 'antd';
import 'antd/dist/antd.css';

import {saveToken} from '../../store/login/action';
import saveUser from '../../store/user/action';

const Profile = ({saveUser, saveToken}) => {



    return(
        <div>
            <h1>Hola, </h1>
        </div>
    )
}

export default connect(null, {saveToken, saveUser}) (Profile);