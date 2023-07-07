'use client'

import Head from 'next/head'
import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import WelcomeText from './components/welcome'
import { Element } from 'react-scroll'

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name='description'
          content='Create Next JS Responsive Menu with Tailwind CSS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Navbar /> */}
      <div className='relative'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: '#71d5f4',
            //   },
            // },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ff6600',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <div>
          <div className='flex justify-center items-center h-screen'>
            <div className='text-black text-4xl text-center'>
              <WelcomeText
                text={['Welcome! Let s Build Your Dream Website.']}
              />
            </div>
          </div>

          <div>
            <Element name='test1' className='element'>
              <div className='grid grid-cols-1 xs:grid-cols-2 gap-4 bg-sky-200 h-screen'>
                <div className='bg-red-200 flex items-center justify-center'>
                  <div className='w-5/6 bg-white rounded-lg text-center'>
                    <div className=' bg-green-200 w-32 h-32 flex justify-center items-center mx-auto mt-[-50px]'>
                      <h3> Profile Image</h3>
                    </div>
                    <p>Fullstack Developer</p>
                  </div>
                </div>
                <div className=' flex items-center justify-center'>05</div>
              </div>
            </Element>
          </div>
        </div>
      </div>
    </div>
  )
}
