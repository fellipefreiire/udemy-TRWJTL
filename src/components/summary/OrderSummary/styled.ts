import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-content: center;

  h1,
  h2,
  ul,
  form {
    align-self: center;
  }

  ul {
    list-style-type: none;
  }
`
