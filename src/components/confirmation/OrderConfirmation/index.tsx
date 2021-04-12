import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { useOrderDetails } from '../../context/OrderDetails'
import AlertBanner from '../../common/AlertBanner'
import * as S from './styled'

interface PropsTypes {
  setOrderPhase: any
}

const OrderConfirmation: React.FC<PropsTypes> = ({
  setOrderPhase
}): JSX.Element => {
  //@ts-ignore
  const [, , resetOrder] = useOrderDetails()
  const [orderNumber, setOrderNumber] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      // in a real app we would get order details from context
      // and send with POST
      .post(`http://localhost:3030/order`)
      .then(response => {
        setOrderNumber(response.data.orderNumber)
      })
      .catch(error => setError(true))
  }, [])

  if (error) {
    return <AlertBanner />
  }

  function handleClick() {
    // clear the order details
    resetOrder()

    // send back to order page
    setOrderPhase('inProgress')
  }

  if (orderNumber) {
    return (
      <S.Container>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new order</Button>
      </S.Container>
    )
  } else {
    return <div>Loading</div>
  }
}

export default OrderConfirmation
