// Main.jsx
import { useState, useEffect } from 'react'
import { Card } from '../../Components/Card/Card'

const URL = "https://fakestoreapi.com/products"

export const Main = ({ filter }) => {
  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="w-[90vw] grid grid-cols-1 md:grid-cols-4 ml-12 gap-5 mt-10">
      {
        filteredProducts.map(product => (
          <Card key={product.id} {...product} />
        ))
      }
    </section>
  )
}
