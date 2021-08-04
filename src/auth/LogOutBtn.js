import React,{useContext} from "react";
import AuthContext from '../context/AuthContext';
import axios from 'axios'
import {   Flex,Select,
   
    Button,
   } from "@chakra-ui/react"
import {useHistory} from "react-router-dom";
function LogOutBtn(){
    const{getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function logOut(e){
 history.push("/")
        e.preventDefault();
     await axios.get("http://localhost:8000/auth/logout");
     await getLoggedIn();
  
    }
return(
    <button onClick={logOut}>logout</button>
)

}

export default LogOutBtn;