import React,{useContext} from "react";
import AuthContext from '../context/AuthContext';
import axios from 'axios'
import dotenv from "dotenv";
import {   Flex,Select,
   
    Button,
   } from "@chakra-ui/react"
import {useHistory} from "react-router-dom";
dotenv.config()

const url = `http://localhost:8000/auth/`;

function LogOutBtn(){
    const{getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function logOut(e){
        history.push("/")
        e.preventDefault();
     await axios.get(`${url}logout`);
    window.location.reload()
     await getLoggedIn();
  
    }
return(
    <button style={{padding:"20px"}} onClick={logOut}>LOGOUT</button>
)

}

export default LogOutBtn;