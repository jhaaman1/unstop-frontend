import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
        // pr='4.5rem'
          pr='1.2rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          color={'white'}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <ViewOffIcon/> : <ViewIcon/>}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

export default PasswordInput