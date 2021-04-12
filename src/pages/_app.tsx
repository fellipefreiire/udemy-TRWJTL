import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { OrderDetailsProvider } from '../components/context/OrderDetails'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <OrderDetailsProvider>
        <Component {...pageProps} />
      </OrderDetailsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
