import React,{useContext, useEffect} from 'react';
import { Link,useHistory, Redirect } from 'react-router-dom'
import { Spinner, Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"
import UserContext from '../context/UserContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
 function Rolecheck() {
    const history = useHistory();
    const {currentuser} = useContext(UserContext);

async function Checkrole(){
    const role = currentuser.role;
    if(role=="voter"){
        history.push("/voterdashboard"
        )
        // (<Redirect to="/workerdashboard" />)
    }else if(role=="admin"){
         history.push("/admindashboard")
        //  (<Redirect to="/admin-panel" />)
    }else{
        history.push("/dashboard")
        // (<Redirect to="/dashboard" />)
    }
}
useEffect(()=>{
    Checkrole();
   },[]);
  return (
      <div>
          <h1>rolecheck</h1>
  <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/>

      </div>
  
)
}

export default Rolecheck;
