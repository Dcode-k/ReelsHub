import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi'
  import { Link } from "react-router-dom";

const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure();
  return (
    <>
    <Button pos={'fixed'} top={'4'} left={'4'} zIndex={"overlay"} colorScheme='purple' w={'10'} h={'10'} p={'0'} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement='start' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
         <DrawerCloseButton/>
         <DrawerHeader>Reels Hub</DrawerHeader>
         <DrawerBody>
             <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/'}>Home</Link>
            </Button>
            <Button  onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/reels'}>Reels</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/reels?category=free'}>Free Reels</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/upload'}>Upload Reel</Link>
            </Button>
           </VStack>
           <HStack pos={'absolute'}  bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme='purple'>
                <Link to={'/login'}>
                 Log In
                </Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                <Link to={'/signup'}>
                Sign Up
                </Link>
            </Button>
           </HStack>
         </DrawerBody>
        </DrawerContent>
        
    </Drawer>
    </>
  )
}

export default Header