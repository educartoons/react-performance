import { render, screen } from '@testing-library/react'
import ProductsList from './ProductsList'

describe('<ProductList />', () => {
  test('should render', () => {
    render(<ProductsList />)
  })

  test('should render products', async () => {
    render(<ProductsList />)
    const products = await screen.findAllByRole('listitem')
    expect(products.length).toBeGreaterThan(0)
  })
})
