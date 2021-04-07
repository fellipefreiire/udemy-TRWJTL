import * as S from './styled'
import { useEffect, useState } from 'react'
import ScoopOption from '../ScoopOption'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import ToppingOption from '../ToppingOption'
import AlertBanner from '../../common/AlertBanner'

interface PropsTypes {
  optionType: string
}

const Options: React.FC<PropsTypes> = ({ optionType }): JSX.Element => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  // optionType is 'scoops' or 'toppings'

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response.data)
        console.log(response.data)
      })
      .catch(error => setError(true))
  }, [optionType])

  if (error) {
    return <AlertBanner />
  }

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

  const optionItems = items.map(
    (item): JSX.Element => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    )
  )

  return <Row>{optionItems}</Row>
}

export default Options
