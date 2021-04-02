import { useState } from 'react'
import * as S from './styled'

export const replaceCamelWithSpaces = (colorName: string): string => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

const Home: React.FC = () => {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  return (
    <S.Home>
      <S.Container>
        <S.Button
          buttonColor={buttonColor}
          onClick={handleClick}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </S.Button>
        <S.Input
          id='disable-button-checkbox'
          type='checkbox'
          aria-checked={disabled}
          onClick={(e: {
            target: { checked: boolean | ((prevState: boolean) => boolean) }
          }) => setDisabled(e.target.checked)}
        />
        <S.Label htmlFor='disable-button-checkbox'>Disable button</S.Label>
      </S.Container>
    </S.Home>
  )
}

export default Home
