import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import AddProduct from './AddProduct'

describe('<AddProduct />', () => {
  test('should render', () => {
    render(<AddProduct />)
  })
  test('should display a button for adding new product', () => {
    render(<AddProduct />)
    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toBeInTheDocument()
  })
  test('should not display the message: The product was saved', () => {
    render(<AddProduct />)
    const message = screen.queryByText('The product was saved')
    expect(message).toBe(null)
  })
  test('should display the message: The product was saved when the user creates a new product', async () => {
    render(<AddProduct />)
    const input = screen.getByPlaceholderText('Product Name')
    const button = screen.getByRole('button')
    await userEvent.type(input, 'New Product')
    await userEvent.click(button)

    const message = await screen.findByText('The product was saved')
    console.log(screen.debug())
    expect(message).not.toBe(null)
  })
})
