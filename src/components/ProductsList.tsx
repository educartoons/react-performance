import { useQuery } from 'react-query'
import ProductPreview from './ProductPreview'

export type Product = {
  id: number
  image: string
  name: string
  price: number
  type: string
  created_at: string
}

export default function ProductsList() {
  const { isLoading, error, data } = useQuery<Product[], string>(
    'getProducts',
    () => {
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
    }
  )
  return (
    <div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? <h2>Loading</h2> : null}
        {error ? <h2>There was an error trying to fetch products</h2> : null}
        {data &&
          data.map((product) => (
            <ProductPreview key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}
