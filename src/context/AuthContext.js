import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config()
const AuthContext = createContext();

function AuthContextProvider(props){
    const [loggedIn, setLoggedIn] = useState(undefined);
    const url =process.env.BASE_API;

    async function getLoggedIn(){
        const loggedInRes = await axios.get(`${url}/auth/loggedIn`);
        setLoggedIn(loggedInRes.data)
    }
    useEffect(()=>{
     getLoggedIn();
    },[]);
return <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
{props.children}
</AuthContext.Provider>

}
export default AuthContext;
export  {AuthContextProvider};