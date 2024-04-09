import ProductPreview from './ProductPreview'
import { useFetchProducts } from '../hooks/useFetchProducts'

export type Product = {
  id: number
  image: string
  name: string
  price: number
  type: string
  created_at: string
}

export default function ProductsList() {
  const [products, isLoading] = useFetchProducts()
  return (
    <div>
      <div
        role="listbox"
        className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {isLoading ? <h2>Loading</h2> : null}
        {products.map((product) => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
