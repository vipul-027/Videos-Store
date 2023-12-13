import React from 'react'
import {Box, Stack, VStack, HStack, Heading, Button, Input, Text} from "@chakra-ui/react";
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="4" color={'white'}>
    <Stack direction={['column', 'row']}>
      <VStack alignItems={"stretch"} w={"full"} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={['center', 'left']}>
          Subscribe to get updates
          </Heading>

          <HStack 
            borderBottom={"2px solid white"}
            py="2"
          >
            <Input placeholder="Enter Email here..."  border={"none"} 
            borderRadius={'none'} 
            outline={'none'}
            focusBorderColor={'nones'}
            />
            <Button  p={"0"}
               colorScheme={"purple"}
               variant={'ghost'}
               borderRadius={'0 20px 20px 0'}
               >
                 <AiOutlineSend size={20}/> 
            </Button>
          </HStack>
      </VStack>
 
   <VStack w={"full"}
    borderLeft={['none', '1px solid white']}
    borderRight={['none',  ' 1px solid white']}
   >
  <Heading  size="md" textTransform={'uppercase'} textAlign={'center'}>
    Video Store
  </Heading>
  <Text>
   @ all right reserved
  </Text>
   </VStack>
    
  <VStack w={"full"}>
    <Heading size={"md"} textTransform={'uppercase'} >
        Social Media
    </Heading>
    <Button variant={"link"} colorScheme={'white'}>
       <a href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=10858s">youtube</a>
    </Button>

    <Button variant={"link"} colorScheme={'white'}>
       <a href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=10858s">Instagram</a>
    </Button>

    <Button variant={"link"} colorScheme={'white'}>
       <a href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=10858s">Github</a>
    </Button>

  </VStack>
    </Stack>
 </Box>
  );
}

export default Footer;