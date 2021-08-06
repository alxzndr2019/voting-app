import React, { useState,useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config()
import UserContext from '../../context/UserContext';
import { Box,Badge,Stack,useToast, Heading, useColorModeValue, Button,HStack, VStack, Image, AspectRatio, Container, Flex, Spacer, Center, Text, Divider, useProps } from "@chakra-ui/react"
const url =`${process.env.BASE_API}/votesessions/`;




const ContestantCard = (props) => {
    const {getCurrentuser, currentuser}= useContext(UserContext);
    const toast = useToast()
    const[errorMessage, setErrorMesssage] = useState()

    const[email, setEmail]= useState(currentuser.email);
    const[vote, setVote]= useState(true);
    const[voter_id, setVoter_id]= useState(currentuser.user);

    const[contestant, setContestant]= useState(props.contestant.name);
    
    const[signature, setSignature]= useState(currentuser.nin);
    const history = useHistory();
  
  
   let votes = props.contestant.votes.length

   const rdr =()=>{
    history.push({
      pathname:"/voterdashboard",
    }
    )
  }
  async function sendConfirmation(e){
    e.preventDefault();
    try{
        const confirmData={
            email,
            contestant
          };
          console.log(confirmData);
          await axios.post(`${process.env.BASE_API}/auth/confirmation`, confirmData)
    }catch(error){
        console.log(error);
    }
}
   async function voteo (e){ 
    try{
        const voteData={
          email,
          signature,
          contestant,
          vote
        };
        const voterData={
          voter_id
        };
        console.log(voteData);
        await axios.post(`${url}${props.state.id}/voters`, voterData);
       await axios.post(`${url}${props.state.id}/contestant/${props.contestant._id}`, voteData);
       sendConfirmation()
rdr()
        toast({
         title: 'Vote successful',
         description:`you've successfully voted for ${props.contestant.name}`,
         status: "success",
         duration: 9000,
         isClosable: true,
         position:"top"
       })
       }catch(error){
         console.log(error.response);
         setErrorMesssage(error.response.data.errorMessage);
         toast({
          title: error.response.data.errorMessage,
          description: "You cant vote more than once",
          status: "warning",
          duration: 9000,
          isClosable: true,
          position:"top"
        })
       }
   }
    return (
        <Box p='4' borderWidth='1px' rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} 
        p={8} >
            <VStack spacing={5}>
            <Image
  borderRadius="full"
  boxSize="150px"
  src={props.contestant.image}
  alt={props.contestant.name}
/>
<Box p='2'><Heading>{props.contestant.name}</Heading></Box>
            <Divider/>
            <Text>{props.contestant.about}</Text>
            <Heading>{votes}</Heading>
            <Button onClick={voteo}>Vote {props.contestant.name} </Button>
            </VStack>
            
   </Box>
    )
}

export default ContestantCard