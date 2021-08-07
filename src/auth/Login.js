import React,{useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import axios from 'axios';
import dotenv from "dotenv";
import { Flex,Box,useToast,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue} from '@chakra-ui/react';
dotenv.config()

const Login = () => {

    const toast = useToast()
    const url = `${process.env.BASE_API}/auth/`;

  const[email, setEmail]= useState('');
  const[errorMessage, setErrorMesssage] = useState()
  const[password, setPassword]= useState('')
  const{getLoggedIn} = useContext(AuthContext);
  const {getCurrentuser, currentuser}= useContext(UserContext);
  const history = useHistory();

  const role = currentuser.role
  async function rolechecker(role){
    try{

       history.push("/rolecheck")

    }catch(err){
      console.log(err);
    }
  }
  async function login(e){
    e.preventDefault();
    try{
     const loginData={
       email,
       password,
     };
     console.log(loginData);
     await axios.post(`${url}login`, loginData);
      await getCurrentuser();
      await rolechecker();
     await getLoggedIn();
     toast({
      title: 'Login successful',
      description: "you've successfully logged in to Vote easy",
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
        description: "Please Enter the correct details",
        status: "error",
        duration: 9000,
        isClosable: true,
        position:"top"
      })
    }
  }
    return (
        <Box>
        <Flex
          // minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to start <Link color={'blue.400'}>voting</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="enter your email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'green.400'} href='/dashboard'>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={'green.400'}
                    color={'white'}
                    _hover={{
                      bg: 'green.500',

                    }}
                    onClick={login}
                    >
                     Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        </Box>
    )
}

export default Login