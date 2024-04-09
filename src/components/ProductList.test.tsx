import { render, screen } from '@testing-library/react'
import ProductsList from './ProductsList'

describe('<ProductList />', () => {
  test('should render', () => {
    render(<ProductsList />)
  })

  test('should show Loading message when the fetch function has not returned anything yet', () => {
    render(<ProductsList />)
    const message = screen.getByText('Loading')
    expect(message).toBeInTheDocument()
  })

  test('should show Loading message when the fetch function has not returned anything yet', () => {
    render(<ProductsList />)
    const message = screen.getByText('Loading')
    expect(message).toBeInTheDocument()
  })

  test('should display the products', async () => {
    render(<ProductsList />)
    const products = await screen.findAllByRole('listitem')
    console.log(products.length)
    expect(products.length).toBe(2)
  })
})
