import { ChangeEvent, useState, MouseEvent } from 'react'
import { Product } from './ProductsList'
import Input from './Input'

type NewProduct = Omit<Product, 'created_at' | 'id'>

const getToken = () => {
  return localStorage.getItem('supabase.auth.token')
}

export default function AddProduct() {
  const [product, setProduct] = useState<NewProduct>({
    name: '',
    price: 0,
    image: '',
    type: '',
  })
  const [productSaved, setProductSaved] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(getToken())
    try {
      const response = await fetch(
        'https://uxonyqlchonyeukyqerd.supabase.co/rest/v1/products',
        {
          method: 'POST',
          headers: {
            apiKey: `${import.meta.env.VITE_SUPABASE_KEY}`,
            // Authorization: `Bearer ${getToken()}`,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(product),
        }
      )
      if (response.ok) {
        setProductSaved(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="max-w-sm mx-auto mt-5">
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Product Name
        </label>
        <Input
          value={product.name}
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Price
        </label>
        <Input
          value={product.price}
          name="price"
          placeholder="Product Price"
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Image
        </label>
        <Input
          value={product.image}
          name="image"
          placeholder="Product Image"
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Type
        </label>
        <Input
          value={product.type}
          name="type"
          placeholder="Type"
          onChange={handleChange}
        />
      </div>

      {productSaved ? (
        <div className="border-green-500 bg-green-300 px-4 py-4">
          The product was saved
        </div>
      ) : null}

      <button
        type="submit"
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  )
}
