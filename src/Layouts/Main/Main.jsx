import { useState,useEffect } from 'react'
import { Card } from '../../Components/Card/Card'

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
     <section className="w-[90vw] grid grid-cols-1 md:grid-cols-4 ml-12 gap-5 mt-10">
        {
          products.map(product => (
            <Card key={product.id} {...product} />
          ))
        }
      </section> 
    </>
  )
}
