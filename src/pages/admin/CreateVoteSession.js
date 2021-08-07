import React, { useEffect, useState, useContext } from "react"
import axios from 'axios';
import dotenv from "dotenv";
import { Flex,Center, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter, ModalCloseButton, Modal, ModalBody,   useDisclosure,
    Divider, Box,useToast,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue} from '@chakra-ui/react';

    dotenv.config()

const CreateVoteSession = () => {
    const[position, setPosition]=useState('')
    const[about, setAbout]=useState('')
    const[deadline, setDeadline]=useState('')
    const[active, setActive]=useState(true)
    const[contestant, setContestant]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const[name, setName]=useState()
    const[image, setImage]=useState()
    const[aboutj, setAboutj]=useState()
    const[votes, setVotes]=useState([])
    const[voters, setVoters]=useState([])

    const url =`${process.env.BASE_API}/votesessions/`;

    const toast = useToast()


const addcontestant =()=>{
    const contestantData ={
        name,
        image,
        aboutj,
        voters,
        votes
    }
    contestant.push(contestantData)
    console.log(contestant)
}


async function createvotesession(e){
    e.preventDefault();

    try{

        const sessionData ={
            position,
            about,
            deadline,
            active,
            contestant
        }
     console.log(sessionData);
     //"http://localhost:8082/auth/"
     await axios.post(`${url}`, sessionData);
     toast({
      title: 'Vote Session Created successfully',
      description: "session active",
      status: "success",
      duration: 9000,
      isClosable: true,
      position:"top"
    })
  
    }catch(error){
      console.log(error);
      
    }
  }



    return (
        <div className="Footer">
        <Box p={5}  pr={5} >
                <Heading>Create a Voting Session</Heading>
            </Box>
            <Center>
            <Divider  w="90%"/>
        </Center>
        <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="position">
                  <FormLabel>Position</FormLabel>
                  <Input type="position" placeholder="enter the position"  onChange={(e)=>setPosition(e.target.value)} value={position}/>
                </FormControl>
                <FormControl id="about">
                  <FormLabel>About the position</FormLabel>
                  <Input type="about" onChange={(e)=>setAbout(e.target.value)} value={about}/>
                </FormControl>
                <FormControl id="deadline">
                  <FormLabel>Whats the Deadline (Example, Aug 24, 2021 )</FormLabel>
                  <Input type="deadline" onChange={(e)=>setDeadline(e.target.value)} value={deadline}/>
                </FormControl>
                <Box p={5}  pr={5} >
                <Heading>Contestants</Heading>
            </Box>
                <Center>
            <Divider  w="90%"/>
        </Center>
                { contestant.map((contestant,index)=>(
                        <Box p='2'  >
                      <Text>{contestant.name}</Text>
                        </Box>
                )
                )
            }
             <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add contestant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={4}>
          <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Name" size="lg" onChange={(e)=>setName(e.target.value)} value={name} />
                </FormControl>
                <FormControl id="about">
                  <FormLabel>Image link</FormLabel>
                  <Input placeholder="Image" size="lg" onChange={(e)=>setImage(e.target.value)} value={image} />
                </FormControl>
                <FormControl id="about">
                  <FormLabel>About this Contestant</FormLabel>
                  <Input placeholder="About" size="lg" onChange={(e)=>setAboutj(e.target.value)} value={aboutj} />
                </FormControl>
    </Stack >
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addcontestant}>
              Add contestant
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
                <Stack spacing={10}>
                  <Button
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',

                    }}
            onClick={onOpen}
                    >
                     Add Contestant
                  </Button>
                  <Button colorScheme="blue" mr={3} onClick={createvotesession}>
              Create Vote session
            </Button>
                  <Center>
            <Divider  w="90%"/>
        </Center>
                </Stack>
              </Stack>
            </Box>
        </div>
    )
}

export default CreateVoteSession