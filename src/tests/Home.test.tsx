import Home from '../components/Home'
import { render, screen, fireEvent } from '@testing-library/react'

test('button has correct initial color', () => {
  render(<Home />)

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // expect the button text to be 'Change to blue'
  expect(colorButton).toHaveTextContent('Change to blue')

  // click button
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red')
})

describe('button', () => {})
