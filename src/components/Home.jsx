import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions={
    pos:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}

const Home = () => {
  return (
    <Box>
       <MyCarousel/>
       <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                Services
            </Heading>
            <Stack
            h={"full"}
            p={"4"}
            alignItems={"center"}
            direction={["column","row"]}
            >
             <Img src={img5} h={["4","400"]} filter={"hue-rotate(-130deg)"}/>
             <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fugiat non possimus beatae quaerat libero explicabo amet consequuntur aperiam, deleniti dicta fugit omnis aliquam assumenda sit. Asperiores, aspernatur. Minus ad harum impedit ratione iste aperiam voluptatem odio nobis veniam corporis laudantium accusantium facilis hic, eligendi sapiente voluptas nisi quasi, laborum porro architecto in debitis earum. Aperiam impedit iusto magni quam consequuntur et, veritatis excepturi molestiae animi fuga. Rerum minima facilis repudiandae deleniti labore veritatis pariatur, quisquam tempora repellat fuga molestias delectus. Pariatur culpa harum quo ipsa obcaecati dignissimos aliquid, ullam adipisci sunt minima libero voluptatem cum, quidem veniam quos neque!
             </Text>
            </Stack>
       </Container>
    </Box>
  )
}
const MyCarousel=()=>{
    return(
        <Carousel autoPlay infiniteLoop interval={1000} showIndicators={false} showStatus={false} showThumbs={false}>
            <Box w={'full'} h={'100vh'}>
          <Img src={img1} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the future</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
          <Img src={img2} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming is Future</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
          <Img src={img3} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Virtual Gaming </Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
          <Img src={img4} />
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Night Life is cool</Heading>
            </Box>
        </Carousel>
    )
}

export default Home