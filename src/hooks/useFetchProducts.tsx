import { useQuery } from 'react-query'
import { Product } from '../components/ProductsList'

function useFetchProducts(): [Product[], boolean, unknown] {
  const { isLoading, error, data } = useQuery('getProducts', async () => {
    return fetch(
      'https://uxonyqlchonyeukyqerd.supabase.co/rest/v1/products?select=*',
      {
        method: 'GET',
        headers: {
          apiKey: `${import.meta.env.VITE_SUPABASE_KEY}`,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
        },
      }
    ).then((response) => response.json())
  })

  return [data, isLoading, error]
}

export { useFetchProducts }
