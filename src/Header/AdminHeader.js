import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import LogOutBtn from "../auth/LogOutBtn";


function AdminHeader() {
    const {loggedIn} = useContext(AuthContext);
const {currentuser}= useContext(UserContext);
    return (
        <Fragment>
            
            <div className="HeaderLinks">
                <NavLink exact className="Link active" id="home" to='/'>VOTE <span className="redden">EASY</span></NavLink>

 
 <div className="HeaderLinks-SubLinks">
                   
                </div>


                                        <LogOutBtn/>
            </div>

        </Fragment>
    )
}

export default AdminHeader
