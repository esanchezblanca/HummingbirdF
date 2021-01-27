import React from 'react'
import { connect } from 'react-redux';

import './Profile.css';
import 'antd/dist/antd.css';


const Profile = ({user}) => {

    console.log(user.name)

    return(
        <div>
            <h1>Hola, {user.name} </h1>
            <div>
                
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: JSON.parse(state.user.user)
    }
}
export default connect(mapStateToProps) (Profile);