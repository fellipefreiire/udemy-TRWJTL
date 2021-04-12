import { render, screen } from '../../../test-utils/testing-library-utils'
import Options from './index'
import { OrderDetailsProvider } from '../../context/OrderDetails'
import userEvent from '@testing-library/user-event'

test('displays image for each scoop from server', async () => {
  render(<Options optionType='scoops' />)

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images
  const altText = scoopImages.map((element: HTMLImageElement) => element.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('Displays image for each toppings option from server', async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType='toppings' />)
  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole('img', { name: /topping$/i })
  expect(images).toHaveLength(3)

  // check the actual alt text for the images
  const imageTitles = images.map((img: HTMLImageElement) => img.alt)
  expect(imageTitles).toStrictEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping'
  ])
})

test("don't update total if scoops input is invalid", async () => {
  render(<Options optionType='scoops' />)

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla'
  })
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '-1')

  // make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText('Scoops total: $0.00')
  expect(scoopsSubtotal).toBeInTheDocument()
})
