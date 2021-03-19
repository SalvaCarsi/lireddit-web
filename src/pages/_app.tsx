import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Provider, Client, defaultExchanges } from 'urql'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  const client = new Client({
    url: 'http://localhost:4000/graphql',
    exchanges: defaultExchanges,
    fetchOptions: {
      credentials: 'include',
    },
  })

  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
