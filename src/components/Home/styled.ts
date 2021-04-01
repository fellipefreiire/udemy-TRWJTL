import styled from 'styled-components'

type buttonProps = {
  buttonColor: String
}

export const Home = styled.main``

export const H1 = styled.h1``

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button<buttonProps>`
  background-color: ${props => props.buttonColor};
  height: 100px;
  width: 200px;
  border: 0;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
`
