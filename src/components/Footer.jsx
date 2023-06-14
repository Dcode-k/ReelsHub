import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
         <Stack direction={["column","row"]}>
           <VStack alignItems={"stretch"} w={"full"} px={"4"}>
            <Heading size={"md"} textTransform={"uppercase"}>
              Subscribe to get updates!
            </Heading>
           <HStack
           borderBottom={"2px solid white"}
           py={"2"}
           >
            <Input placeholder='Enter Email here....' border={'none'}/>
            <Button
            p={"0"}
            colorScheme='purple'
            variant={"ghost"}
            borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20}/>
            </Button>
           </HStack>
           </VStack>
           <VStack w={"full"}
           borderLeft={["none","1px solid white"]}
           borderRight={["none","1px solid white"]}
           >
            <Heading
            textTransform={"uppercase"}
            textAlign={"center"}
            >
                Reels  HUB
            </Heading>
            <Text>
                All Rights Received
            </Text>
           </VStack>
           <VStack w={"full"}
           >
            <Heading size={"md"} textTransform={"uppercase"}>
             Social Media
            </Heading>
            <Button variant={"link"} colorScheme='white'>
              <a href="https://youtube.com" target='blank'>Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme='white'>
              <a href="https://instagram.com" target='blank'>Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme='white'>
              <a href="https://github.com" target='blank'>Github</a>
            </Button>
           </VStack>
         </Stack>
    </Box>
  )
}

export default Footer