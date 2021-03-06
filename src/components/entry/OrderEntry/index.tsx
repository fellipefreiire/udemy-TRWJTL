import * as S from './styled'
import Options from '../Options'
import { useOrderDetails } from '../../context/OrderDetails'

interface PropsTypes {
  setOrderPhase: any
}

const OrderEntry: React.FC<PropsTypes> = ({ setOrderPhase }): JSX.Element => {
  //@ts-ignore
  const [orderDetails] = useOrderDetails()

  const orderDisabled = orderDetails.totals.scoops === '$0.00'

  return (
    <S.Container>
      <h1>Design Your Sundae!</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <S.NewButton
        disabled={orderDisabled}
        onClick={() => setOrderPhase('review')}
      >
        Order Sundae!
      </S.NewButton>
    </S.Container>
  )
}

export default OrderEntry
