import { ChangeEvent, MouseEvent, useState } from 'react'

export default function AddProduct() {
  const [productName, setProductName] = useState('')
  const [productSaved, setProductSaved] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value)
  }

  const handleSave = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const body = {
        name: productName,
      }
      console.log(body)
      const response = await fetch(
        'https://ajvfpabhgrucrutkedds.supabase.co/rest/v1/products',
        {
          method: 'POST',
          headers: {
            apiKey: `${import.meta.env.VITE_APIKEY}`,
            Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify(body),
        }
      )
      if (response.ok) {
        setProductSaved(true)
        // we saved the data
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="max-w-sm mx-auto pt-4">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Name
        </label>
        <input
          type="productName"
          id="productName"
          value={productName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          required
        />
      </div>
      <button
        type="submit"
        onClick={handleSave}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Product
      </button>
      {productSaved && <h2>The product was saved</h2>}
    </form>
  )
}
