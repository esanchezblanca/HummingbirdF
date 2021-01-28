import React from 'react'
import { connect } from 'react-redux';

import './Profile.css';
import 'antd/dist/antd.css';


const Profile = ({user}) => {

    console.log("profile/user ", user)

    return(
        <div className="dataDiv">
            <h1 className="greeting">Hola, {user.name} </h1>
            <div className="personalCard">
                <p className="singleData">Nombre: {user.name} </p>
                <p className="singleData">Apellido: {user.lastName}</p>
                <p className="singleData">Mail: {user.mail}</p>
                <p className="singleData">Curso: {user.year_id}</p>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps) (Profile);