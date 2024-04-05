import { Product } from '../components/ProductsList'

const defaultProduct = {
  id: 0,
  name: '',
  price: 0,
  image: '',
  type: '',
}

function formatProducts(data: any): Product[] {
  const products = data.map((item: any) => {
    const product = { ...defaultProduct }
    if (item.id) {
      product.id = item.id
    }
    if (item.name) {
      product.name = item.name
    }
    if (item.image) {
      product.image = item.image
    }
    if (item.type) {
      product.type = item.type
    }
    if (item.price) {
      product.price = item.price
    }
    return product
  })

  return products
}

export { formatProducts }
