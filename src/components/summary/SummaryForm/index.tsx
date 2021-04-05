import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import * as S from './styled'

const SummaryForm: React.FC = (): JSX.Element => {
  const [tcChecked, setTcChecked] = useState(false)

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger trigger='hover' placement='right' overlay={popover}>
        <S.SpanBlue> Terms and Conditions</S.SpanBlue>
      </OverlayTrigger>
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
