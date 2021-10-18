import React, { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import LoadingOverlay from 'react-loading-overlay';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import {useHistory} from "react-router-dom";
import dotenv from "dotenv";
import {   Flex,Select,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    useToast,
    Button,
    Heading,
    Text,
    useDisclosure,
    useColorModeValue,
    Spinner,
    RadioGroup, HStack, Radio,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    PinInput,
    PinInputField,
    ModalBody,
    ModalCloseButton,
   } from "@chakra-ui/react"
import axios from 'axios'
dotenv.config()

   function Register(){
    const MotionBox = motion(Box)
    const history = useHistory();

    const url = `https://voting-be.herokuapp.com/auth/`;
    const toast = useToast()
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[nin, setNin]= useState('');
    const[role, setRole]= useState("");
    const[password, setPassword]= useState('');
    const[passwordVerify, setPasswordVerify]= useState('');
    const[otpverify, setOtpVerify]= useState('');
    const[isloading, setIsloading]= useState(false);
    const{getLoggedIn} = useContext(AuthContext);
const {currentuser}= useContext(UserContext);
const {getCurrentuser}= useContext(UserContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    async function sendOtp(e){
        e.preventDefault();
        try{
          setIsloading(true)
            const otpData={
                email,
              };
              console.log(otpData);
              await axios.post(`${url}send`, otpData)
              
              setIsloading(false)
              onOpen()
        }catch(error){
            console.log(error);
        }
    }
    async function verifyemail(e){
        e.preventDefault();
        try{
            setIsloading(true)

            const otpData={
                otpverify,
              };
              console.log(otpData);
              await axios.post(`${url}verify`, otpData)
              setIsloading(false)
              toast({
                title: 'Email verified',
                description: "Your email has been verified",
                status: "success",
                duration: 9000,
                isClosable: true,
                position:"top"
              })
              register()
        }catch(error){
            console.log(error.response.data.errorMessage);
            toast({
              title: error.response.data.errorMessage,
              description: "Enter the correct OTP sent to your email address or resend OTP",
              status: "error",
              duration: 9000,
              isClosable: true,
              position:"top"
            })
        }
    }
    async function resendOTP(e){
        e.preventDefault();
        try{
            setIsloading(true)
            const otpData={
                email,
              };
              console.log(otpData);
              
              await axios.post(`${url}resend`, otpData)
              setOtpVerify(" ")
              setIsloading(false)
              toast({
                title: "Another OTP has been sent to your email address",
                description: "Enter new OTP",
                status: "success",
                duration: 9000,
                isClosable: true,
                position:"top"
              })
        }catch(error){
            console.log(error);
        }
    }

    async function register(e){
        try{
          setIsloading(true)

         const registerData={
           email,
           name,
           nin,
           role,
           password,
           passwordVerify,
           otpverify
         };
         console.log(registerData);
         //"http://localhost:8082/auth/"
         await axios.post(`${url}`, registerData);
         await getLoggedIn();
         await getCurrentuser();
         history.push("/rolecheck")
        
         setIsloading(false)
         toast({
          title: 'Signup successful',
          description: "Welcome to Vote easy",
          status: "success",
          duration: 9000,
          isClosable: true,
          position:"top"
        })
      
        }catch(error){
          console.log(error);
          console.log(error.response);
          toast({
            title: error.response.data.errorMessage,
            description: "Do the needful",
            status: "error",
            duration: 9000,
            isClosable: true,
            position:"top"
          })
        }
      }

    return(


        <Box>
        <Flex
          // minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('black.50', 'black.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Register to start voting</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                voting hasnt been <Link color={'blue.400'}>easier</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
              <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>your otp has been sent to {email}. kindly enter it</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input placeholder="Enter OTP" size="lg" onChange={(e)=>setOtpVerify(e.target.value)} value={otpverify} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={verifyemail}>
              Verify
            </Button>
            <Button variant="ghost" onClick={resendOTP}>Resend OTP</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  
    <LoadingOverlay
  active={isloading}
  spinner
  text='Wait a bit...'
  >
</LoadingOverlay>
   
  
              <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="name" placeholder="enter your name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="enter your email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </FormControl>
                <FormControl id="nin">
                  <FormLabel>NIN (National Identification Number)</FormLabel>
                  <Input type="nin" placeholder="enter your nin"  onChange={(e)=>setNin(e.target.value)} value={nin}/>
                </FormControl>
                <FormLabel as="legend">
             you are registering as a?
           </FormLabel>
           <RadioGroup>
             <HStack spacing={20}>
          <Radio onClick={() => setRole("admin")} value="Admin">
               Admin
          </Radio>
          <Radio  onClick={() => setRole("voter")}value="Voter">
               Voter
          </Radio>
             </HStack>
           </RadioGroup>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Verify Password</FormLabel>
                  <Input type="password" onChange={(e)=>setPasswordVerify(e.target.value)} value={passwordVerify}/>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>


                  </Stack>
                  <Button

                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',

                    }}

                    onClick={register}
                    >
                     Signup!
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        </Box>
    )


   }

export default Register;