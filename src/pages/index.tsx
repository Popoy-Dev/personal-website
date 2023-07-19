import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from './../../public/kua-profile-poy.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navbar, setNavbar] = useState(false)
  const [isDevelopment, setIsDevelopment] = useState('development')

  const handleServiceDisplay = (value: string) => {
    setIsDevelopment(value)
  }
  return (
    <div className='bg-gradient-to-t from-sky-800 to-gray-800	h-screen overflow-x-auto	m'>
      <header className=''>
        <nav className='px-4'>
          <div className='flex justify-between '>
            <div className='flex item-center py-3'>
              <h1 className='text-2xl font-bold'>Poy</h1>
            </div>
            <div className='py-3'>
              <button onClick={() => setNavbar(!navbar)} className='text-4xl'>
                {navbar ? (
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-12 h-12 text-white'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                ) : (
                  <div className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-12 h-12 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
          <div
            className={`absolute right-0 bg-slate-300 w-3/5  ${
              navbar ? 'block' : 'hidden'
            } h-screen	`}
          >
            <ul className=''>
              <li>Home</li>
              <li>About</li>
              <li>1</li>
            </ul>
          </div>
        </nav>
      </header>

      <section>
        <div className='text-center'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-20 w-9/12 m-auto md:text-left'>
            <div className=''>
              <h3 className='text-xl md:text-6xl text-yellow-400 font-semibold'>
                Hello,
              </h3>
              <h1 className='text-3xl md:text-8xl font-700 my-1 font-extrabold'>
                I am Popoy.
              </h1>
              <h1 className='text- md:text-6xl font-semibold	text-green-300'>
                Fullstack Developer
              </h1>

              <p className='p-4 leading-loose md:text-xl md:p-0 md:my-10'>
                Must explain to how all this mistaken idea denouncing pleasure
                pain the system and expound the actua.
              </p>

              <button className='bg-green-500 hover:bg-green-700 rounded-2xl px-8 py-2 font-semibold'>
                Hire me &#x2192;
              </button>
            </div>

            <div className='w-6/12 h-6/12 mx-auto mt-5'>
              <Image src={Profile} alt='Profile' className='rounded-full' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:mt-20 w-9/12 m-auto'>
            <div className='bg-slate-600 mx-5 py-8 rounded-lg my-6'>
              <p className='text-center text-yellow-400 text-6xl font-black'>
                04
              </p>
              <p className='text-center text-white text-3xl font-bold mt-5'>
                Year of Experience
              </p>
            </div>

            <div className='text-left px-4 py-4 col-span-2'>
              <h1 className='text-white text-2xl font-bold mb-4'>
                My Advantage
              </h1>
              <p className='text-white leading-7'>
                Must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account the system and expound the actual and praising
                pain was born.
              </p>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                <div className='py-9 border-t-yellow-500 border-4 border-yellow-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>HTML</p>
                </div>

                <div className='py-9 border-r-lime-400 border-4 border-lime-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>CSS</p>
                </div>

                <div className='py-9 border-l-pink-500 border-4 border-pink-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>Javascript</p>
                </div>

                <div className='py-9 border-b-sky-400 border-4 border-sky-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>PHP</p>
                </div>
                <div className='py-9 border-t-stone-400 border-4 border-stone-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>Laravel</p>
                </div>
                <div className='py-9 border-r-red-400 border-4 border-red-100 rounded-lg mx-4 text-xl'>
                  <h2 className='font-extrabold text-3xl'>88%</h2>
                  <p>React</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-t from-yellow-900 to-gray-500 mt-8'>
            <h1 className='text-white text-2xl font-bold pt-12 pb-4'>
              Popular Services
            </h1>
            <p className='leading-8 text-center px-8 pb-8 text-base'>
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account the system and expound the actual and praising pain was
              born.
            </p>
            <div className='flex mx-4 mt-12 justify-between	'>
              <button
                className={`px-8 bg-gray-900 hover:bg-gray-600 rounded-full py-2 mb-8 w-40 ${
                  isDevelopment === 'development' ? 'text-yellow-600' : ''
                } font-extrabold `}
                onClick={() => handleServiceDisplay('development')}
              >
                Development
              </button>
              <button
                className={`px-8 bg-gray-900 hover:bg-gray-600 rounded-full py-2 mb-8 w-40  ${
                  isDevelopment === 'marketing' ? 'text-yellow-600' : ''
                }  font-extrabold`}
                onClick={() => handleServiceDisplay('marketing')}
              >
                Marketing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}