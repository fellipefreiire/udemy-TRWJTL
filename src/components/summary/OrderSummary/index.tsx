import * as S from './styled'
import SummaryForm from '../SummaryForm'
import { useOrderDetails } from '../../context/OrderDetails'

interface PropsTypes {
  setOrderPhase: any
}

const OrderSummary: React.FC<PropsTypes> = ({ setOrderPhase }): JSX.Element => {
  //@ts-ignore
  const [orderDetails] = useOrderDetails()

  const scoopArray = Array.from(orderDetails.scoops.entries())
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ))

  const hasToppings = orderDetails.toppings.size > 0
  let toppingsDisplay = null

  if (hasToppings) {
    const toppingsArray = Array.from(orderDetails.toppings.keys())
    //@ts-ignore
    const toppingList = toppingsArray.map(key => <li key={key}>{key}</li>)
    toppingsDisplay = (
      <>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>{toppingList}</ul>
      </>
    )
  }

  return (
    <S.Container>
      <h1>Order Summary</h1>
      <h2>Scoops: {orderDetails.totals.scoops}</h2>
      <ul>{scoopList}</ul>
      {toppingsDisplay}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </S.Container>
  )
}

export default OrderSummary
