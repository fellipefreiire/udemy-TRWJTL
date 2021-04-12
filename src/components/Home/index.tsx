import * as S from './styled'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'

import OrderEntry from '../entry/OrderEntry'
import OrderSummary from '../summary/OrderSummary'

import { OrderDetailsProvider } from '../context/OrderDetails'

const Home: React.FC = () => {
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
    <OrderDetailsProvider>
      {/*@ts-ignore */}
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  )
}

export default Home
