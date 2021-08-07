import React from 'react';

import './App.css';
import Routes from './Routes'
import  AuthContextProvider  from './context/AuthContext';
import UserContextProvider from './context/UserContext';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import axios from 'axios';

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
