import React, { useState,useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import dotenv from "dotenv";
import UserContext from '../../context/UserContext';
import { Box,Badge,Stack,useToast, Heading, useColorModeValue, Button,HStack, VStack, Image, AspectRatio, Container, Flex, Spacer, Center, Text, Divider, useProps, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption } from "@chakra-ui/react"
import { Fragment } from 'react';
dotenv.config()



const ViewUsers =()=>{
    const [users, setUsers]=useState([])
    const url =`http://localhost:8000/auth/users`;
    
    useEffect(()=>{
        getUsers()
        
       },[]);

    const getUsers =()=>{
        axios.get(`${url}`)
        .then((response)=>{
          const userz = response.data;
          setUsers(userz);
        })
        .catch(error=>console.error(`Error:${error}`));
      }

    return (
  <Box overflowX="auto">
    <Fragment>
    
 <Table minWidth="300px"  variant="striped" colorScheme="teal">
        <TableCaption>ALL USERS</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Votes</Th>
            <Th>NIN</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        {users.map((user,_id)=>(

        <Tbody>
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.role}</Td>
            <Td>{user.votes.length}</Td>
            <Td>{user.nin}</Td>
            <Td>{user.email}</Td>
          </Tr>
        </Tbody>
         ))}
      </Table>

      
         
    </Fragment>
    <Button as='a'  bgColor={'green.400'} href='./admindashboard' >Home</Button>
 
  </Box>
    )
}
export default ViewUsers