import * as S from './styled'
import Options from '../Options'

const OrderEntry: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
    </S.Container>
  )
}

export default OrderEntry
