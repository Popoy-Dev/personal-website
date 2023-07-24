import React, { useState } from 'react'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
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
            <div className='relative w-auto my-6 mx-auto w-9/12'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300'>
                  <h3 className='text-3xl font=semibold'>Web Development</h3>
                  <button
                    className='bg-transparent border-0 text-black float-right'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full'>
                      x
                    </span>
                  </button>
                </div>
                <div className='relative p-6 flex-auto'>
                  <p>hgelllo</p>
                </div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
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
