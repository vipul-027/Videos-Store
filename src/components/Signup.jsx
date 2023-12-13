import React from 'react'
import { Container, VStack , Heading, Input, Button, Link, Text, Avatar} from '@chakra-ui/react'
const Signup = () => {
  return (
    <Container maxw={"container.xl"} h={"100vh"} p={"16"}> 
    
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']}  m={'auto'} my={'5'}>

       

        <Heading >
           Videos Store
        </Heading>
           <Avatar alignSelf={'center'} boxSize={'20'}/>

           <Input placeholder={'Name'} type={'text'} 
        required
         focusBorderColor={'purple.500'}
        />

        <Input placeholder={'Email'} type={'email'} 
        required
         focusBorderColor={'purple.500'}
        />

<Input placeholder={'Password'} type={'password'} 
        required
         focusBorderColor={'purple.500'}
        />
  <Button colorScheme='purple' type='Submit'>Sign Up</Button>
  <Text textAlign={'right'}>
    already Signed Up? {' '}
    <Button variant={'link'} colorScheme='purple'>
        <Link to={'/Sign Up'}> Login in</Link>
      </Button>
    </Text>
  
</VStack>
    </form>

    </Container>
  )
}

export default Signup;