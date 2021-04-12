import Head from 'next/head'
import Home from '../components/Home'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import OrderEntry from '../components/entry/OrderEntry'
import OrderSummary from '../components/summary/OrderSummary'

import { OrderDetailsProvider } from '../components/context/OrderDetails'

const Homepage: React.FC = () => {
  const [orderPhase, setOrderPhase] = useState('inProgess')

  let Component = OrderEntry
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry
      break
    case 'review':
      Component: OrderSummary
      break
    // case 'completed':
    //   Component: OrderConfirmation
    //   break
    default:
  }

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <OrderDetailsProvider>
        <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
      </OrderDetailsProvider>
    </div>
  )
}

export default Homepage
