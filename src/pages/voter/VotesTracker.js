import React, { useState,useEffect } from 'react'
import axios from 'axios';
import UserContext from '../../context/UserContext';

import VoteTrackerCard from './VoteTrackerCard'
import { Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup, Spinner,Divider, Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"


const VoteTracker = () => {
    const[contestant, setContestant]=useState([])
    const[votesession, setVotesession]=useState([])
    const[mycontestant, setMycontestant]=useState([])
    const url = 'http://localhost:8000/'

    
    useEffect(()=>{
        const interval = setInterval(()=>{
            getVotesessions()

        },1000);

         return ()=>clearInterval(interval);
        },[]);

    const getVotesessions =()=>{
        axios.get(`${url}votesessions`)
        .then((response)=>{
          const Votesession = response.data;
          setVotesession(Votesession);
        })
        .catch(error=>console.error(`Error:${error}`));
      }
    return (
        <div className="Footer">
              <Box p={5}  pr={5} >
                <Heading >Your votes</Heading>
            </Box>
            <Center>
            <Divider  w="90%"/>
        </Center>
       <VoteTrackerCard/>
        </div>
    )
}

export default VoteTracker