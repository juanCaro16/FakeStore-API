import { useState,useEffect } from 'react'
import { Card } from '../Card/Card'

const URL = "https://fakestoreapi.com/products"

export const Main = () => {

    const [products, setProducts] = useState([])

    const handleGetProducts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProducts(data)
    }   


    useEffect(()=> {
        handleGetProducts()
    }),[]

  return (
    <>
     <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {
          products.map(product => (
            <Card key={product.id} {...product} />
          ))
        }
      </section> 
    </>
  )
}
