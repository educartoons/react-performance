import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AddProduct from './AddProduct'

describe('<AddProdut />', () => {
  test('renders', () => {
    render(<AddProduct />)
  })

  test('should have a button for adding a product', () => {
    const button = screen.getByRole('button', { name: 'Submit' })
    expect(button).toBeDefined()
  })
})
