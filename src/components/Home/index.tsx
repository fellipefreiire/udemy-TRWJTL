import * as S from './styled'
import SummaryForm from '../summary/SummaryForm'
import Options from '../entry/Options'

const Home: React.FC = () => {
  return (
    <S.Home>
      <SummaryForm />
      <Options optionType='scoops' />
    </S.Home>
  )
}

export default Home
