import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import * as S from './styled'

interface PropsTypes {
  setOrderPhase: any
}

const SummaryForm: React.FC<PropsTypes> = ({ setOrderPhase }): JSX.Element => {
  const [tcChecked, setTcChecked] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    // pass along to the next phase.
    // The next page will handle submitting order from context.
    setOrderPhase('completed')
  }

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement='right'
        overlay={popover}
      >
        <S.SpanBlue> Terms and Conditions</S.SpanBlue>
      </OverlayTrigger>
    </span>
  )

  return (
    <Form onSubmit={handleSubmit}>
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
