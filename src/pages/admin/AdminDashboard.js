import React, { useEffect, useState, useContext } from "react"
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { Spinner,Divider,useColorModeValue, Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text, SimpleGrid} from "@chakra-ui/react"


const AdminDashboard = () => {
    const[votesessions, setVotesessions]=useState([])
    const[users, setUsers]=useState([])

    const url = 'http://localhost:8000/'
    useEffect(()=>{
        const interval = setInterval(()=>{
            getVotesessions()
            getUsers()

        },1000);
         return ()=>clearInterval(interval);
        },[]);
        const getUsers =()=>{
            axios.get(`${url}auth/users`)
            .then((response)=>{
              const allUsers = response.data;
              setUsers(allUsers);
            })
            .catch(error=>console.error(`Error:${error}`));
          }
    
    console.log(votesessions)
    const getVotesessions =()=>{
        axios.get(`${url}votesessions`)
        .then((response)=>{
          const allVotesessions = response.data;
          setVotesessions(allVotesessions);
        })
        .catch(error=>console.error(`Error:${error}`));
      }

console.log(votesessions)

const totalvotesessions = votesessions.length
const totalusers = users.length

    return (
        <div className="Footer">
          <Box p={5}  pr={5} >
                <Heading>Admin Dashboard</Heading>
            </Box>
            <Center>
            <Divider  w="90%"/>

        </Center>
        <SimpleGrid columns={2} spacing={10} p={5} >
        <Box p='2' borderWidth='1px' borderColor={'blue.200'} rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} 
        p={8} >
            <Box p='2'><Heading>Create new voting session</Heading></Box>
            <Divider/>
            <Text textColor='yellow'>Create a voting session</Text>
            <Divider/>
            <Box p='4'>

                <Button as='a' bgColor={'blue.400'}  href='./createvotesession'>Create</Button>
            </Box>
            

   </Box>
   <Box p='2' borderWidth='1px' borderColor={'purple.200'} rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} 
        p={8} >
            <Box p='2'><Heading>Track all voting sessions</Heading></Box>
            <Divider/>
            <Text textColor='yellow'>View details of ongoing sessions</Text>
            <Divider/>
            <Text textColor='blue.200'>Total vote sessions: {totalvotesessions}</Text>

            <Divider/>
            <Box p='4'>

<Button bgColor={'purple.400'} >View sessions</Button>
</Box>
   </Box>
   <Box p='2' borderWidth='1px' borderColor={'green.200'} rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} 
        p={8} >
            <Box p='2'><Heading>View users on system</Heading></Box>
            <Divider/>
            <Text textColor='yellow'>View all users in the system</Text>
            <Divider/>
            <Divider/>
            <Text textColor='blue.200'>Total users: {totalusers}</Text>

            <Box p='4'>

<Button bgColor={'green.400'} >View Users</Button>
</Box>

   </Box>
  
   <Box p='2' borderWidth='1px' borderColor={'red.200'} rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'} 
        p={8} >
            <Box p='2' textColor='red.400'><Heading>TERMINATE SYSTEM</Heading></Box>
            <Divider/>
            <Text textColor='yellow'>THIS WILL DESTROY ALL DATA</Text>
            <Divider/>
            <Text>be careful</Text>

   </Box>
</SimpleGrid>
<Center>
            <Divider  w="90%"/>

        </Center>
        </div>
    )
}

export default AdminDashboard