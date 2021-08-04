import React from "react"
import { Link } from 'react-router-dom'
import { Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"

import{ createBreakpoints} from "@chakra-ui/theme-tools"
const breakpoints= createBreakpoints({
  sm:"30em",
  md:"50px",
  lg:"62em",
  xl:"80em",
  "2xl":"96em",
})


 function Landing() {
  return (
    <Box bgGradient="linear(to-t, green.500, blue.700)" >
      
      <Center>
    <Flex flexWrap="wrap">
  <Box w={["100%","100%","50%","50%"]}  p={10}>
  <Center>
  <Heading size="3xl">A Cloud Platform for Decentralized Voting</Heading>
  </Center>
  <br/>
  <Text  fontSize="1xl">
    Vote easy will make voting fun in unimaginable ways 
  </Text>
  <Button as='a' href='./register' size="lg" colorScheme="green" mt ="24px">
    Get started
  </Button>
</Box>
<Spacer/>

</Flex>
</Center>

  </Box>
  )
}

export default Landing;
