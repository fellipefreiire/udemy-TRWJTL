import Home from '../components/Home'
import { replaceCamelWithSpaces } from '../components/Home'
import { render, screen, fireEvent } from '@testing-library/react'

test('button has correct initial color', () => {
  render(<Home />)

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue'
  })

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to MediumVioletRed')
})

test('initial conditions', () => {
  render(<Home />)
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to MidnightBlue'
  })
  expect(colorButton).toBeEnabled()

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<Home />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' })

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('Disabled button has gray background and reverts to red', () => {
  render(<Home />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' })

  // disable button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle('background-color: gray')

  // re-enable button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle('background-color: MediumVioletRed')
})

test('Clicked disabled button has gray background and reverts to MidnightBlue', () => {
  render(<Home />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' })

  // change button to MidnightBlue
  fireEvent.click(button)

  // disable button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle('background-color: gray')

  // re-enable button
  fireEvent.click(checkbox)
  expect(button).toHaveStyle('background-color: MidnightBlue')
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
