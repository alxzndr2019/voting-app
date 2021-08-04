import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import LogOutBtn from "../auth/LogOutBtn";


function VoterHeader() {
    const {loggedIn} = useContext(AuthContext);
const {currentuser}= useContext(UserContext);
    return (
        <Fragment>
            
            <div className="HeaderLinks">
                <NavLink exact className="Link active" id="home" to='/'>Vote <span className="redden">easy</span></NavLink>

 
 <div className="HeaderLinks-SubLinks">
                </div>

                                    <NavLink activeClassName="active" className="Link" to='/votestracker'>VOTES</NavLink>

                                        <LogOutBtn>LOGOUT</LogOutBtn>
            </div>

        </Fragment>
    )
}

export default VoterHeader
