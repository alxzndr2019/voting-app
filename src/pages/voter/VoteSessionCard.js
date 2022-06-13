import React, { useState,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box,Badge,Stack, Heading, useColorModeValue,useToast, Button,HStack, VStack, Image, AspectRatio, Container, Flex, Spacer, Center, Text, Divider, useProps } from "@chakra-ui/react"
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config()
const VoteSessionCard = (props) => {
  const url =`http://localhost:8000/votesessions/`;
    
    const toast = useToast()

    const[contestant, setContestant]=useState(props.votesession.contestant)
    const[id, setId]=useState(props.votesession._id)
    const[days, setDays]=useState()
    const[hours, setHours]=useState()
    const[minutes, setMinutes]=useState()
    const[seconds, setSeconds]=useState()
    const[alert, setAlert]=useState("")
   
    const[cardbutton, setCardbutton]=useState()

    const[border, setBorder]=useState("")
     const deactivate =()=>{
      axios.patch(`${url}/${id}`,{"active":false})
     }
    var countDownDate = new Date(props.votesession.deadline).getTime();
    const history = useHistory();
    var timer = setInterval(function() {
      // code goes here
      var now = new Date().getTime();
var timeleft = countDownDate - now;
    
setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
setHours( Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
setMinutes( Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
setSeconds( Math.floor((timeleft % (1000 * 60)) / 1000));

if (timeleft < 0) {
  clearInterval(timer);
  setDays("");
setHours( "");
setMinutes("");
setSeconds(" ");
setAlert("VOTE SESSION IS OVER")
setBorder("red")
deactivate()

}

      }, 1000)

      const proceed =()=>{
        history.push({
          pathname:`/votesessions/${props.votesession._id}`,
          state:{
            contestant,
            id
          }
        }
        )
      }
      useEffect(()=>{
        checksesh()

          setCardbutton();
       },[]);
      const checksesh =()=>{
        if(props.votesession.active==false){
            setAlert("your vote has been collected")
           setCardbutton()
        }
      }
     
    return (
        <Box p='9' borderWidth='1px' borderColor={border} rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} onClick={proceed} p={8} >
            <Box p='2'><Heading>{props.votesession.position}</Heading></Box>
            <Divider/>
            <Text textColor='yellow.200'>{props.votesession.about}</Text>
            <Divider/>
            <Text>{alert}</Text>
            <HStack ><Text textColor='green.200'>voting ends in {days} days {hours} hours {minutes} minutes and {seconds} seconds</Text><Badge colorScheme="green">{props.votesession.active}</Badge></HStack>

   </Box>
    )
}

export default VoteSessionCard