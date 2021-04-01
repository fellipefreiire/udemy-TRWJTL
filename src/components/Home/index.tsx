import { useState } from 'react'
import * as S from './styled'

const Home: React.FC = () => {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  return (
    <S.Home>
      <S.Container>
        <S.Button buttonColor={buttonColor} onClick={handleClick}>
          Change to {newButtonColor}
        </S.Button>
        <S.Input type='checkbox' />
      </S.Container>
    </S.Home>
  )
}

export default Home
