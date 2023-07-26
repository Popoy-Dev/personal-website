import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import WebDevelopment from './../../public/web-development.jpg'
import CMSImage from './../../public/CMS-Modal.jpg'
import SoftwareDevelopment from './../../public/softwaredevelopment.png'

interface ModalProps {
  title: string
}
const Modal = ({ title }: ModalProps) => {
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState<StaticImageData>(CMSImage)

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
      <h3
        className='text-xl font-extrabold mt-4 cursor-pointer hover:text-blue-400'
        onClick={() => setShowModal(true)}
      >
        {' '}
        <span className='text-2xl'>&rarr;</span> Read more
      </h3>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto w-11/12 h-5/6 md:w-6/12'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none h-full'>
                <div className='flex items-start justify-between p-5 '>
                  <button
                    className='bg-transparent border-0 text-black absolute top-1 right-2 '
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-white opacity-7 h-8 w-8 text-3xl block py-0 rounded-full text-bold'>
                      x
                    </span>
                  </button>
                </div>
                <div className='w-full m-2 md:w-8/12 md:m-auto'>
                  <Image
                    src={modalImage}
                    alt={title}
                    className='md:h-4/6 object-cover	'
                  />
                  <div className='w-8/12 m-auto'>
                    <h1 className='text-3xl text-bold my-8'>{title}</h1>
                    <p></p>
                  </div>
                </div>
                <div className='flex items-center justify-end p-2 rounded-b'>
                  <button
                    className='text-white text-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal
