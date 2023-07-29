import '@/styles/globals.css'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      primary: 'black',
      secondary: 'white',
    },
  })
  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
