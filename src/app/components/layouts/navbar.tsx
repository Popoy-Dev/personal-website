import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useAnimate, stagger, motion } from 'framer-motion'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('.icon', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.9,
      }
    )

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 1,
        delay: isOpen ? staggerMenuItems : 0,
      }
    )
  }, [isOpen])

  return scope
}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const scope = useMenuAnimation(isOpen)

  return (
    <nav
      className='w-full bg-transparent shadow z-50 absolute top-0 left-0'
      ref={scope}
    >
      <div className='justify-between px-4 mx-auto lg:max-w-7xl flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <a href='#'>
              <h2 className='text-2xl text-black font-bold'>WEBSITE</h2>
            </a>
         
          </div>
        </div>
        <div>
        <div className='pt-4' ref={scope}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-black'
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
                        className='w-6 h-6 text-black'
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
              </motion.button>
            </div>
     
        </div>
      </div>
      <div
            className={`flex-1 justify-self-center pb-3 mt-10 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul
              className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 bg-slate-300	text-center py-4'
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
              }}
            >
              <li className='text-black mr-4 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='test1'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  My Profile
                </Link>
              </li>
              <li className='text-black cursor-pointer mr-4'>
                <Link
                  activeClass='active'
                  to='test1'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  My Profile
                </Link>
              </li>
              <li className='text-black mr-4 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='test1'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  My Profile
                </Link>
              </li>
              <li className='text-black mr-4 cursor-pointer'>
                <Link
                  activeClass='active'
                  to='test1'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
    </nav>
  )
}

export default Navbar
