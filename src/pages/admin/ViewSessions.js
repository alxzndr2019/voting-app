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



const ViewSessions =()=>{
    const [sessions, setSessions]=useState([])
    const url =`http://localhost:8000/votesessions`;
    
    useEffect(()=>{
        getSessions()
        
       },[]);

    const getSessions =()=>{
        axios.get(`${url}`)
        .then((response)=>{
          const session = response.data;
          setSessions(session);
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
            <Th>POSITION</Th>
            <Th>ABOUT</Th>
            <Th>NO OF CONTESTANTS</Th>
            <Th>VOTERS</Th>
            <Th>DEADLINE</Th>
            <Th>ACTIVE</Th>
          </Tr>
        </Thead>
        {sessions.map((session,_id)=>(

        <Tbody>
          <Tr>
            <Td>{session.position}</Td>
            <Td>{session.about}</Td>
            <Td>{session.contestant.length}</Td>
            <Td>{session.voters.length}</Td>
            <Td>{session.deadline}</Td>
            <Td>{session.active}</Td>
          </Tr>
        </Tbody>
         ))}
      </Table>

      
      <Button as='a'  bgColor={'green.400'} href='./admindashboard' >Home</Button>   
    </Fragment>
       
  </Box>
    )
}
export default ViewSessions