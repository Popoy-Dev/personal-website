import React, {useState, useEffect} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
  } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import WebDevelopment from './../../public/web-development.jpg'
import CMSImage from './../../public/CMS-Modal.jpg'
import SoftwareDevelopment from './../../public/softwaredevelopment.png'


interface ModalProps {
    title: string
  }
  const ServicesModal = ({ title }: ModalProps) => {
  const [modalImage, setModalImage] = useState<StaticImageData>(CMSImage)
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = useState(<OverlayOne />)

      useEffect(() => {
        console.log('title', title)
        const handleModalImage = () => {
          console.log('hello')
          switch (title) {
            case 'Web development':
              setModalImage(WebDevelopment)
              break
            case 'Content Management System':
              setModalImage(CMSImage)
              break
            case 'Software Development':
              setModalImage(SoftwareDevelopment)
              break
    
            default:
              break
          }
        }
        handleModalImage()
      }, [title])
    
      return (
        <>
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
          >
            Use Overlay one
          </Button>
          <Button
            ml='4'
            onClick={() => {
              setOverlay(<OverlayTwo />)
              onOpen()
            }}
          >
            Use Overlay two
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader className='text-black'>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody className='text-black'>
                                <Image
  src={modalImage}
  alt={title}
  className='md:h-3/6 w-auto object-cover	m-auto'
  object-fit='cover'
/>
                <Text>Custom backdrop filters!</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
  
  }


  export default ServicesModal