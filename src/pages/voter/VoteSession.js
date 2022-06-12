import React,{useState, useEffect, useContext} from "react"
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Box, Heading,HStack ,SimpleGrid, Divider, Input, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"
import UserContext from '../../context/UserContext';
import axios from 'axios';
import ContestantCard from "./ContestantCard";
import dotenv from "dotenv";
dotenv.config()

const VoteSession = () => {
    const {currentuser} = useContext(UserContext);
    const[votesession, setVotesession]=useState([])
    const[contestants, setContestants]=useState([])
    const[errorMessage, setErrorMesssage] = useState()

    const {state}=useLocation();
    const location = useLocation(); 
    const history = useHistory();
    const url =`http://localhost:8000`;

        useEffect(()=>{
            getVotesession()
            
           },[]);

           useEffect(()=>{
            const interval = setInterval(()=>{
              getContestants()
            },1000);
             return ()=>clearInterval(interval);
            },[]);

    const getVotesession =()=>{
        axios.get(`${url}${location.pathname}`,{withCredentials: true})
        .then((response)=>{
          const Votesession = response.data;
          setVotesession(Votesession);
        })
        .catch(error=>console.error(`Error:${error}`));
      }
      const getContestants =()=>{
        axios.get(`${url}${location.pathname}/contestant`,{withCredentials: true})
        .then((response)=>{
          const Contestants = response.data;
          setContestants(Contestants);
        })
        .catch(error=>console.error(`Error:${error}`));
      }


    return (
        <Box>
            <Box p={5}  pr={5} >
            <Heading>This contest is for the position of {votesession.position}</Heading>
            <Text>{votesession.about}</Text>
            </Box>
            <Center>
            <Divider  w="90%"/>
        </Center>

        <SimpleGrid minChildWidth="300px" spacing={10} p={5} >
     { contestants.map((contestant,_id)=>(
                       
                        <ContestantCard
                  key={contestant._id}
                  contestant={contestant}
                 state= {state}
                />

                       

                )
                )
            }

</SimpleGrid>

<Button as='a'  bgColor={'green.400'} href='./voterdashboard' >Home</Button>

        </Box>

    )
}

export default VoteSession