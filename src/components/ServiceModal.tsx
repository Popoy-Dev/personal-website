import React, { useState, useEffect } from 'react'
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
  content: { title: string; sentence: string; techStack: {} }
}
const ServicesModal = ({
  title = '',
  content = { title: '', sentence: '', techStack: {} },
}: ModalProps) => {
  const [modalImage, setModalImage] = useState<StaticImageData | string>('')
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
          setModalImage('')
          break
      }
    }
    handleModalImage()
  }, [title])

  const DisplayImage = () => {
    console.log('title titletitle', title)
    return modalImage !== '' ? (
      <Image
        src={modalImage}
        alt={title}
        className='md:h-3/6 w-auto object-cover	m-auto'
        object-fit='cover'
      />
    ) : (
      ''
    )
  }

  return (
    <>
      {/* <Button
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
          >
            Use Overlay one
          </Button> */}
      <Button
        ml='4'
        mt='8'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
        variant='solid'
        colorScheme='teal'
      >
        Read More
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl' >
        {overlay}
        <ModalContent backgroundColor="#526156" >
          <ModalHeader>
            <Text className='text-white text-3xl'>{title}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className='text-white'>
            <DisplayImage />
            <Text className='my-4 text-bold text-center'>{content.title}</Text>
            <Text className='leading-8'>{content.sentence}</Text>
            {Object.entries(content.techStack).map(([key, value]: any) => (
              <p key={key}>
            <Text className='mt-2'>         <strong>{key}:</strong> {value}</Text>

       
              </p>
            ))}
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
