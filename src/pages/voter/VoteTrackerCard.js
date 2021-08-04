import React, { useState,useEffect } from 'react'
import axios from 'axios';
import UserContext from '../../context/UserContext';

import { Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup, Spinner,Divider, Box, Heading, Button, Image, AspectRatio, Container, Flex, Spacer, Center, Text } from "@chakra-ui/react"


const VoteTrackerCard = (props) => {
  const[contestant, setContestant]=useState([])

    return (
        
        <StatGroup borderWidth="1px" borderRadius="9px">
  <Stat p={10}>
    <StatLabel>Muhamadu Buhari</StatLabel>
    <StatNumber>15</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat p={10}>
    <StatLabel>Atiku Yahaya</StatLabel>
    <StatNumber>9</StatNumber>
    <StatHelpText>
      <StatArrow type="decrease" />
      9.05%
    </StatHelpText>
  </Stat>

  <Stat p={10}>
    <StatLabel>STATUS</StatLabel>
    <StatNumber>IN PROGRESS</StatNumber>
    <StatHelpText>
      <StatArrow type="increase" />
      23.36%
    </StatHelpText>
  </Stat>
  
</StatGroup>
       
    )
}

export default VoteTrackerCard