import * as S from './styled'
import Button from 'react-bootstrap/Button'
import Options from '../Options'
import { useOrderDetails } from '../../context/OrderDetails'

interface PropsTypes {
  setOrderPhase: (value: string | ((prevVar: string) => string)) => void
}

const OrderEntry: React.FC<PropsTypes> = ({ setOrderPhase }): JSX.Element => {
  const [orderDetails] = useOrderDetails()

  const orderDisabled = orderDetails.totals.scoops === '$0.00'

  return (
    <S.Container>
      <h1>Design Your Sundae!</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}>
        Order Sundae!
      </Button>
    </S.Container>
  )
}

export default OrderEntry
