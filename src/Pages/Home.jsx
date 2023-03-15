import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <Box>
      <Box boxShadow={'base'} h='55px'>
        <Navbar/>
      </Box>
    </Box>
  )
}

export default Home