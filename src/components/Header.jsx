/* eslint-disable no-unused-vars */
import React from 'react';
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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button pos={'fixed'} top={'4'} left={'4'} padding={'0'} onClick={onOpen}>
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={'bold'} >Zvideo</DrawerHeader>

          <DrawerBody>
            <VStack>
              <Button
                onClick={onClose}
                colorScheme="twitter"
                variant={'ghost'}
                size={'lg'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="twitter"
                variant={'ghost'}
                size={'lg'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="twitter"
                variant={'ghost'}
                size={'lg'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="twitter"
                variant={'ghost'}
                size={'lg'}
              >
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'twitter'} size={'lg'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'twitter'}
                variant={'outline'}
                size={'lg'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
