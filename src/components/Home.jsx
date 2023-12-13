import React from 'react'
import {Box, Heading, Container, Stack, Image, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
 
const headingOptions ={
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform:'uppercase',
    p: '4',
    size:"2xl"

};



const Home = () => {
  return (
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p="4">
        <Heading textTransform={'uppercase'}
         py="1"
         w={'fit-content'}
         borderBottom={'2px  solid'}
         m="auto"
        >
             Services
        </Heading>

        <Stack h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
        >
     <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>

      <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", 16]} textAlign={"center"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
       et dolore magna aliqua. Amet massa vitae tortor condimentum lacinia quis. Quam id leo in vitae. 
       Iaculis eu non diam phasellus vestibulum lorem sed. At erat pellentesque adipiscing commodo elit. 
       Varius duis at consectetur lorem donec massa. Vel pretium lectus quam id leo in vitae turpis. Ultrices 
       vitae auctor eu augue. Massa tincidunt dui ut ornare lectus. Sit amet consectetur adipiscing elit duis 
       tristique sollicitudin nibh. Eu augue ut lectus arcu bibendum at. Semper eget duis at tellus at urna.
      </Text>
        </Stack>
    </Container>
  </Box>

  );
}



const MyCarousel = ()=> (

    <Carousel infiniteLoop 
    autoPlay interval={1000}
     showArrows={false} 
     showThumbs={false} 
     showStatus={false}>
        <Box w="full" h={'100vh'}>
          <img src={img1}/>
          <Heading bg={'blackAlpha.600'}  color={'whitesmoke'}  {...headingOptions}>
          Watch the future
          </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <img src={img2} />
             <Heading bg={'blackAlpha.600'}  color={'whitesmoke'} {...headingOptions}>
                Game is the future
             </Heading>
        </Box>

       <Box w="full" h={'100vh'}>
        <img src={img3}/>
        <Heading bg={'blackAlpha.600'} color={'whitesmoke'} {...headingOptions}>
            gaming on console
        </Heading>
       </Box>

    <Box w="full" h={'100vh'}>
       <img src={img4}/>
       <Heading bg={'blackAlpha.600'} color={'whiteAlpha.800'} {...headingOptions}>
        night life is good
       </Heading>
    </Box>
    </Carousel>
);



export default Home;