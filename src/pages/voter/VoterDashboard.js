import React, { useEffect, useState, useContext } from "react"
import axios from 'axios';
import { Link, useHistory, useLocation } from 'react-router-dom'

import UserContext from '../../context/UserContext';
import VoteSessionCard from "./VoteSessionCard";
import dotenv from "dotenv";
import { Spinner,Divider, Grid, SimpleGrid, Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"
dotenv.config()
const VoterDashboard = () => {
    const {currentuser} = useContext(UserContext);

    const[votesessions, setVotesessions]=useState([])
    const url =`https://voting-be.herokuapp.com/`;

    const deadline = 'December 31 2015 23:59:59 GMT+0200';
    const {state}=useLocation();    


    function getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );

        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
    useEffect(()=>{
        const interval = setInterval(()=>{
            getVotesessions()
           const time= getTimeRemaining(deadline).minutes

        },1000);
        
         return ()=>clearInterval(interval);
        },[]);

        function search(nameKey, votesessions){
            for (var i=0; i < votesessions.length; i++) {
                if (votesessions[i].contestant.votes.email === nameKey) {
                    return votesessions[i];
                }
            }
        }
    const getVotesessions =()=>{
        axios.get(`${url}votesessions`)
        .then((response)=>{
          const allVotesessions = response.data;
          setVotesessions(allVotesessions);
        })
        .catch(error=>console.error(`Error:${error}`));
      }

console.log(votesessions)
      const getVotedcontestant =()=>{
        axios.get(`${url}votesessions`)
      }

    return (
        <Box>
            <Box p={5}  pr={5} >
                <Heading>Active Voting Sessions</Heading>
            </Box>
        <Center>
            <Divider  w="90%"/>
        </Center>

        <SimpleGrid minChildWidth="150px" spacing={10} p={5} >

     { votesessions.map((votesession,_id)=>(

                        <VoteSessionCard
                  key={votesession._id}
                  votesession={votesession}
                />
                )
                )
            }
           </SimpleGrid>
            <Box p={5}  pr={5} >
                <Heading>Inactive Voting Sessions</Heading>
            </Box>
        <Center>
            <Divider  w="90%"/>
        </Center>
        </Box>
    )
}

export default VoterDashboard