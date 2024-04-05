import { useEffect, useState } from "react"


export default function Products(){
  const [products, setProduts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://ajvfpabhgrucrutkedds.supabase.co/rest/v1/products?select=*', {
      method: "GET",
      headers: {
        "apiKey": `${import.meta.env.VITE_APIKEY}`,
        "Authorization": `Bearer ${import.meta.env.VITE_APIKEY}`
      }
    })
    const data = await response.json();
    setProduts(data)
  }

  useEffect(()=>{
    fetchProducts();
  })

  return <div>
    <ul>
    {
      products.map((item)=><li>{item.name}</li>)
    }
    </ul>
  </div>
}