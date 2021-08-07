import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dotenv from "dotenv";
dotenv.config()
const UserContext = createContext();

function UserContextProvider(props){
    const url =`https://voting-be.herokuapp.com`;

    const [currentuser, setCurrentuser] = useState({});

    async function getCurrentuser(){
        const data = await axios.get(`${url}/auth/current`);
        const currentUser = jwtDecode(data.data);
        setCurrentuser(currentUser);
    }
   
    useEffect(()=>{
        getCurrentuser();
       },[]);
return <UserContext.Provider value={{currentuser, getCurrentuser}}>
{props.children}
</UserContext.Provider>

}
export default UserContext;
export  {UserContextProvider};