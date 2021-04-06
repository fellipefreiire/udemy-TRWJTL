import * as S from './styled'
import { useEffect, useState } from 'react'
import ScoopOption from '../ScoopOption'
import axios from 'axios'
import Row from 'react-bootstrap/Row'

interface PropsTypes {
  optionType: string
}

const Options: React.FC<PropsTypes> = ({ optionType }): JSX.Element => {
  const [items, setItems] = useState([])
  // optionType is 'scoops' or 'toppings'

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response.data)
        console.log(response.data)
      })
      .catch(error => {
        // TODO: handle error response
      })
  }, [optionType])

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null

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
