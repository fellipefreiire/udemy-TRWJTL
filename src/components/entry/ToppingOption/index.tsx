import * as S from './styled'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

interface PropsTypes {
  name: string
  imagePath: string
  updateItemCount: any
}

const ToppingOption: React.FC<PropsTypes> = ({
  name,
  imagePath,
  updateItemCount
}): JSX.Element => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '15%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type='checkbox'
          onChange={e => {
            updateItemCount(name, e.target.checked ? 1 : 0)
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  )
}

export default ToppingOption
