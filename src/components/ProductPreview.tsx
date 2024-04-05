import { Product } from './ProductsList'

type ProductPreviewProps = {
  product: Product
}

export default function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <div className="mb-4">
      <figure>
        <img src={product.image} alt="" />
      </figure>
      <p className="text-rose-800 font-semibold mt-2 mb-1">Just In</p>
      <p className="mt-1 mb-1">{product.name}</p>
      <p className="mt-1 mb-1 text-zinc-500">{product.type}</p>
      <p className="mt-3 font-semibold">${product.price}</p>
    </div>
  )
}
