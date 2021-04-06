import * as S from './styled'
import Col from 'react-bootstrap/Col'

interface PropsTypes {
  name: string
  imagePath: string
}

const ScoopOption: React.FC<PropsTypes> = ({
  name,
  imagePath
}): JSX.Element => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3000/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  )
}

export default ScoopOption
