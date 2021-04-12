import { render } from '@testing-library/react'
import { OrderDetailsProvider } from '../components/context/OrderDetails'

const renderWithContext = (ui, options?) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options })

export * from '@testing-library/react'

export { renderWithContext as render }
