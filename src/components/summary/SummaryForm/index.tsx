import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import * as S from './styled'

const SummaryForm: React.FC = (): JSX.Element => {
  const [tcChecked, setTcChecked] = useState(false)

  const checkboxLabel = (
    <span>
      I agree to <S.SpanBlue> Terms and Conditions</S.SpanBlue>
    </span>
  )

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={tcChecked}
          onChange={e => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
