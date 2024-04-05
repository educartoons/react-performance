import { useEffect, useState } from 'react'
import { Product } from '../components/ProductsList'
import { formatProducts } from '../utils/utils'

function useFetchProducts(): [Product[], boolean] {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://uxonyqlchonyeukyqerd.supabase.co/rest/v1/products?select=*',
        {
          method: 'GET',
          headers: {
            apiKey: `${import.meta.env.VITE_SUPABASE_KEY}`,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
          },
        }
      )

      const data = await response.json()
      setProducts(formatProducts(data))
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  })

  return [products, isLoading]
}

export { useFetchProducts }
