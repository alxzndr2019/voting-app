import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import LogOutBtn from "../auth/LogOutBtn";


function Header() {
    const {loggedIn} = useContext(AuthContext);
const {currentuser}= useContext(UserContext);
    return (
        <Fragment>
            
            <div className="HeaderLinks">
                <NavLink exact className="Link active" id="home" to='/'>VOTE <span className="redden">EASY</span></NavLink>

 
 <div className="HeaderLinks-SubLinks">
 {
                   !loggedIn &&(
                        <>
                        <NavLink activeClassName="active" className="Link" to='/login'>LOGIN</NavLink>
                            </>
                )
             }





{
    loggedIn &&(
         <>
         <NavLink activeClassName="active" className="Link" to='/voterdashboard'>SESSIONS</NavLink>
     

     <LogOutBtn>LOGOUT</LogOutBtn>
             </>
 )
}


     
                </div>
            </div>

        </Fragment>
    )
}

export default Header
