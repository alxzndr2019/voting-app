import React,{useContext} from "react";
import AuthContext from '../context/AuthContext';
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config()
import {   Flex,Select,
   
    Button,
   } from "@chakra-ui/react"
import {useHistory} from "react-router-dom";
const url = `${process.env.BASE_API}/auth/`;

function LogOutBtn(){
    const{getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function logOut(e){
 history.push("/")
        e.preventDefault();
     await axios.get(`${process.env.BASE_API}/auth/logout`);
     await getLoggedIn();
  
    }
return(
    <button onClick={logOut}>logout</button>
)

}

export default LogOutBtn;