import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddProduct from './AddProduct'

describe('<AddProduct />', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  test('renders', () => {
    const mockFetch = vi.stubGlobal('fetch', () => {
      return Promise.resolve({
        status: 200,
        ok: true,
      })
    })
    render(<AddProduct />)
  })

  test('add product when the user fills up the input and press on add button', async () => {
    const input = screen.getByPlaceholderText('Product Name')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'New Product')
    await userEvent.click(button)

    await new Promise((resolve) => setTimeout(resolve, 0))

    const message = screen.getByText('The product was saved')

    console.log(screen.debug())

    expect(message).toBeDefined()

    console.log(screen.debug(input))
  })
})
