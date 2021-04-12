import SummaryForm from './index'
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Initial Conditions', () => {
  render(<SummaryForm setOrderPhase={jest.fn()} />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i
  })
  expect(checkbox).not.toBeChecked()

  const confirmButton = screen.getByRole('button', { name: /confirm order/i })
  expect(confirmButton).toBeDisabled()
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<SummaryForm setOrderPhase={jest.fn()} />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i
  })
  const confirmButton = screen.getByRole('button', { name: /confirm order/i })

  userEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()

  userEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', async () => {
  render(<SummaryForm setOrderPhase={jest.fn()} />)
  // popover starts out hidden
  const NullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  )
  expect(NullPopover).not.toBeInTheDocument()

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)
  const popover = screen.queryByText(/no ice cream will actually be delivered/i)

  expect(popover).toBeInTheDocument()

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  )
})
