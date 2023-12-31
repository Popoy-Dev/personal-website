import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Profile from './../../public/kua-profile-poy.png'
import WebDevelopment from './../../public/software.png'
import Cms from './../../public/cms.png'
import WorkExperience from './../../public/work-experience.png'
import SoftwareSystem from './../../public/engineer.png'
import PCI from './../../public/PCI-Logo-Horizontal-Registered.png'
import Arlov from './../../public/arlov.jpg'
import Cell5 from './../../public/cell5.png'
import MDSCSI from './../../public/mdscsi.png'
import Metro from './../../public/metrobank.jpg'
import Collabera from './../../public/collabera.jpg'
import Pabiligrocery from './../../public/pabiligrocery.png'
import Buysikleta from './../../public/buysikleta.png'
import Pharma from './../../public/pharma.png'
import Insurance from './../../public/insurance.png'
import Modal from '@/components/Modal'
import TransitionExample from '@/components/ServiceModal'
import ServicesModal from '@/components/ServiceModal'
import { title } from 'process'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navbar, setNavbar] = useState(false)

  const workExperience = [
    {
      company: 'PCI Tech Center',
      role: 'Web developer',
      image: PCI,
      design: 1,
      content: {
        title: 'Web Developer at PCI Tech Center | Start-Up Experience',
        sentence:
          'As a passionate web developer at PCI Tech Center,  a dynamic start-up, I had the unique opportunity to take ownership of an exciting project, where I single-handedly managed the entire development process. This experience allowed me to hone my skills across all aspects of web development, from crafting engaging front-end interfaces to architecting robust back-end systems and database structures.',
        techStack: {
          FrontEnd: 'Javascript, Jquery, CSS, Bootstrap, AJAX',
          BackEnd: 'PHP, Laravel, ',
          Database: 'phpMyAdmin, MySQL',
          Deployment: 'cPanel',
        },
      },
    },

    {
      company: 'Arlov',
      role: 'Full Stack Developer',
      image: Arlov,
      design: 1,
      content: {
        title: 'Fullstack Developer | Start-Up Experience',
        sentence: '',
        techStack: {
          FrontEnd:
            'Javascript, Jquery, CSS, Bootstrap, AJAX, tailwind, Material UI, React, React Redux',
          BackEnd: 'PHP, Codeigniter',
          Database: 'phpMyAdmin, MySQL',
        },
      },
    },
    {
      company: 'Cell 5',
      role: 'Software Engineer',
      image: Cell5,
      design: 1,
      content: {
        title: 'Software Engineer',
        sentence: '',
        techStack: {
          FrontEnd:
            'Javascript, React, CSS, tailwind, Ant Design, React-Toolkit, React Saga, Syncfusion, Recharts',
          BackEnd: 'Laravel API',
          Database: 'phpMyAdmin, MySQL',
        },
      },
    },
    {
      company: 'MDS Call Solution Inc.',
      role: 'Technology Engineer',
      image: MDSCSI,
      design: 1,
      content: {
        title: 'Technology Engineer',
        sentence: '',
        techStack: {
          FrontEnd: 'Javascript, Jquery, CSS, Bootstrap, AJAX',
          BackEnd: 'PHP, Codeigniter',
          Database: 'Workbench, MySQL',
        },
      },
    },
    {
      company: 'Collabera Digital - Metrobank Client.',
      role: 'React Js Developer',
      image: Metro,
      design: 1,
      content: {
        title: 'Fullstack React and Node Developer',
        sentence: '',
        techStack: {
          FrontEnd: 'React, Material UI, CSS',
          BackEnd: 'Node js, Loopback 3 and 4',
          Database: 'Mongodb',
        },
      },
    },
  ]
  

  const personalProjects = [
    {
      name: 'Pabili Grocery',
      role: 'Fullstack Developer / My Owner',
      image: Pabiligrocery,
      design: 2,
      content: {
        title: 'Pabili Grocery my start up',
        sentence:
        'When I was in my third year of college, I had a part-time job at my sister`s sari-sari store (convenience store). During that time, I had an idea to build an online sari-sari store. In 2018, I worked on the project and then tried to convince many people in my barangay (neighborhood) to use it. I created advertisements and introduced my application to some condominiums, but unfortunately, I didn`t get much response. Two years later, when the pandemic started, I began receiving a lot of online messages from people inquiring about how the application works and how they could place orders. Seizing this opportunity, I started selling products and upgraded my pabili grocery service. For about 2-3 months, the sales were good, and business was promising. However, my success attracted competitors, and soon, many similar applications emerged, which ultimately led to the downfall of my business. Nevertheless, this experience taught me valuable lessons about startups, entrepreneurship, and the importance of adapting to market changes.',
        techStack: {
          FrontEnd: 'Javascript, Jquery, CSS, Bootstrap, AJAX',
          BackEnd: 'PHP, Laravel, ',
          Database: 'phpMyAdmin, MySQL',
          Deployment: 'cPanel',
        },
      },
    },
    {
      name: 'Buysikleta',
      role: 'Fullstack Developer / Subdivision Project',
      image: Buysikleta,
      design: 2,
      content: {
        title: 'Buysikleta Subdivision project',
        sentence:
        'The concept of "Buysikleta" originated from our Subdivision`s challenge, where many residents prefer not to venture outside to purchase their necessities. Concurrently, I noticed a prevalent interest among teenagers in the area towards biking. Thus, I combined these two aspects—the issue of obtaining essentials and the teenagers` enthusiasm for biking.',
        techStack: {
          FrontEnd: 'Next Js, Tailwind, Axios',
          BackEnd: 'Supabase',
          Database: 'PostgreSQL database',
          Deployment: 'AWS Route 53 and amplifiy',
        },
      },
    },
    {
      name: 'Fayne Pharmacy',
      role: 'Fullstack Developer',
      image: Pharma,
      design: 2,
      content: {
        title: 'Fayne Pharmacy Point of Sale',
        sentence:
        'A pharmacy establishment featuring a point-of-sale system and an order monitoring system, complete with inventory management.',
        techStack: {
          FrontEnd: 'Next Js, Tailwind, Axios',
          BackEnd: 'Supabase',
          Database: 'PostgreSQL database',
          Deployment: 'AWS Route 53 and amplifiy',
        },
      },
    },
    {
      name: 'Western Guaranty Corporation',
      role: 'Fullstack Developer',
      image: Insurance,
      design: 1,
      content: {
        title: 'Business Insurance Permit',
        sentence:
        'I spearheaded a project for Western Guaranty Corporation that revolutionized the business permit process in Metro Manila`s local areas, enabling paperless applications and reducing the process time to just 10-15 minutes.',
        techStack: {
          FrontEnd: 'Laravel blade, bootstrap, jquery',
          BackEnd: 'Laravel',
          Database: 'Mysql',
          Deployment: 'Cpanel',
        },
      },
    },
    
  ]

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
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-20 md:w-9/12 md:m-auto md:text-left'>
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
              Welcome to my personal website! I am a passionate full-stack web developer, dedicated to creating innovative solutions and continuously exploring the ever-evolving world of technology. Let`s embark on this exciting journey together!
              </p>

              <button className='bg-green-500 hover:bg-green-700 rounded-2xl px-8 py-2 font-semibold'>
                Hire me &#x2192;
              </button>
            </div>

            <div className='w-6/12 h-6/12 md:w-full md:h-full mx-auto  mt-5'>
              <Image src={Profile} alt='Profile' className='rounded-full md:w-9/12 md:h-6/6 md:mx-auto' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:mt-20 md:w-9/12 md:m-auto'>
            <div className='bg-slate-600 mx-5 py-8 rounded-lg my-6'>
              <p className='text-center text-yellow-400 text-6xl font-black'>
                03
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
              With a robust skill set encompassing JavaScript, CSS, React, Laravel, and more, I leverage the power of cutting-edge technologies to craft dynamic and visually stunning web experiences that leave a lasting impression on users.
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

          <div className='bg-gradient-to-t from-yellow-900 to-gray-500 mt-8 '>
            <div className='md:w-8/12 m-auto'>
              <h1 className='text-white text-2xl font-bold pt-12 pb-4'>
                Popular Services
              </h1>
              <p className='leading-8 text-center px-8 pb-8 text-base'>
              Unlock the true potential of your ideas with my popular services in web development, CMS solutions, and software applications. From concept to reality, I am here to turn your vision into a seamless and remarkable digital reality that exceeds all expectations.
              </p>
              {/* <div className='flex mx-4 mt-2 justify-between	'>
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
              </div> */}
            </div>
          </div>

          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:w-9/12 md:m-auto'>
            <div className='my-9 mx-9 md:mx-2 border-2 border-stone-200	p-8 rounded-lg'>
              <div className='flex justify-center'>
                <div className='rounded-full p-4 bg-gray-400'>
                  <Image
                    src={WebDevelopment}
                    alt='Content Management System'
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h2 className='text-center my-4 text-xl font-bold'>
                Web Development
              </h2>
              <p>
                As a freelance web developer i need to become a fullstack
                developer that i know frontend, backend, security of the
                website, deployment, Testing and Debugging, Web Development
                Concepts, continuous deployment (CI/CD) pipelines.
              </p>

              <ServicesModal
                title='Web development'
                content={{ title: '', sentence: '', techStack: '' }}
                design={1}
              />
            </div>
            <div className='my-9 mx-9 md:mx-2 border-2 border-stone-200 p-8 rounded-lg md:my-9'>
              <div className='flex justify-center'>
                <div className='rounded-full p-4 bg-gray-400'>
                  <Image
                    src={Cms}
                    alt='Content Management System'
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h2 className='text-center my-4 text-xl font-bold'>
                Content Management System
              </h2>

              <p>
                A Content Management System (CMS) is a software application or
                platform that allows users to create, manage, and publish
                digital content on the web without requiring advanced technical
                knowledge. With a CMS, users can add, modify, and organize
                content such as text, images, videos, and documents, all through
                an intuitive interface.
              </p>
              <ServicesModal
                title='Content Management System'
                content={{ title: '', sentence: '', techStack: '' }}
                design={1}
              />
            </div>
            <div className='my-9 mx-9 md:mx-2 border-2 border-stone-200	p-8 rounded-lg'>
              <div className='flex justify-center'>
                <div className='rounded-full p-4 bg-gray-400'>
                  <Image
                    src={SoftwareSystem}
                    alt='Content Management System'
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h2 className='text-center my-4 text-xl font-bold'>
                Software Application
              </h2>
              <p>
                A Software System, also known as a computer software system or
                software application, refers to a collection of computer
                programs and data designed to perform specific tasks or
                functions. Software systems can range from simple applications,
                like a calculator or text editor, to complex systems like
                enterprise resource planning (ERP) software, customer
                relationship management (CRM) software, or even operating
                systems like Windows or macOS. Software systems are developed to
                address specific needs or solve particular problems, and they
                can be used across various industries and domains.
              </p>
              <ServicesModal
                title='Software Development'
                content={{ title: '', sentence: '', techStack: '' }}
                design={1}
              />
            </div>
          </div>

          <div className=' bg-gradient-to-br from-sky-800 via-grey to-pink-700 bg-center'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:w-9/12 md:m-auto flex items-center'>
              <div className='mt-10 mb-6 text-center md:text-left'>
                <h1 className='text-4xl font-bold'>Work Experiences</h1>
                <p className='my-6 text-xl'>
                  I am very thankful for my previous job because i learn a lot
                  from them!
                </p>
              </div>
              <div className='text-right m-10'>
                <Image src={WorkExperience} alt='Work experience' />
              </div>
              {workExperience &&
                workExperience.map((list, i) => (
                  <div
                    className='border-2 border-violet-200 my-9 mx-9 md:mx-2 p-8 rounded-lg'
                    key={i}
                  >
                    <Image
                      src={list.image}
                      alt='PCI Tech Center'
                      height={300}
                      width={300}
                      className='bg-white rounded-lg m-auto mb-6 h-60 w-60 object-contain	'
                    />
                    <h1 className='text-3xl font-bold'>{list.company}</h1>
                    <p className='text-green-400 text-xl'>{list.role}</p>
                    <ServicesModal
                      title={list.company}
                      content={list.content}
                      design={list.design}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className=' bg-gradient-to-br from-pink-800 via-grey to-green-700 bg-center'>
            <div className=' mb-6 text-center  md:w-full mx-4 md:mb-12'>
              <h1 className='text-4xl font-bold pt-10 '>My Projects / Freelance Projects</h1>
      
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:w-9/12 md:m-auto h-full'>
              {personalProjects &&
                personalProjects.map((list, i) => (
                  <div className='border-2 border-red-200 rounded-lg mx-10 pb-8' key={i}>
                    <Image
                      src={list.image}
                      alt='PCI Tech Center'
                      height={1000}
                      width={1000}
                      className='bg-white rounded-lg  object-contain	'
                    />
                    <p className='text-green-400 text-xl mt-4'>{list.role}</p>
                    <ServicesModal
                      title={list.name}
                      content={list.content}
                      design={list.design}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
