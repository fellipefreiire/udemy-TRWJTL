import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const Container = styled.div`
  h1,
  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NewButton = styled(Button)`
  width: 200px;
  height: 50px;
  align-self: center;
  font-size: 24px;
  margin-top: 50px;
`
