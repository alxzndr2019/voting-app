import React from 'react';
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

import './App.css';
import Routes from './Routes'
import AuthContext, { AuthContextProvider } from './context/AuthContext';
import UserContext, { UserContextProvider } from './context/UserContext';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import axios from 'axios';
import theme from "./theme"

axios.defaults.withCredentials = true;

function App() {
  return (
    <ChakraProvider theme={theme}>
   <UserContextProvider>
             <AuthContextProvider>
             <Routes/>
             </AuthContextProvider>
           </UserContextProvider>
   </ChakraProvider>
  );
}

export default App;
