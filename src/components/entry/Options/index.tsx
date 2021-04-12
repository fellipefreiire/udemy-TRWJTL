import * as S from './styled'
import { useEffect, useState } from 'react'
import ScoopOption from '../ScoopOption'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import ToppingOption from '../ToppingOption'
import AlertBanner from '../../common/AlertBanner'
import { pricePerItem } from '../../../constants'
import { useOrderDetails } from '../../context/OrderDetails'
import { formatCurrency } from '../../../utilities'

interface PropsTypes {
  optionType: string
}

const Options: React.FC<PropsTypes> = ({ optionType }): JSX.Element => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  //@ts-ignore
  const [orderDetails, updateItemCount] = useOrderDetails()

  // optionType is 'scoops' or 'toppings'

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response.data)
      })
      .catch(error => setError(true))
  }, [optionType])

  if (error) {
    return <AlertBanner />
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  const optionItems = items.map(
    (item): JSX.Element => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        updateItemCount={(itemName, newItemCount) =>
          updateItemCount(itemName, newItemCount, optionType)
        }
      />
    )
  )

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  )
}

export default Options
