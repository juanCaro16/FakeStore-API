import React from 'react'

export const Card = (product) => {

    //destructuring
    const { id, title, price, description, category, image } = product
  return (
    <>
      <div className="w-70 h-80 bg-gray-600 flex justify-center items-center flex-col rounded-2xl">
        <h1>{title}</h1>
        <h2 className="font-bold text-cyan-400">{price}</h2>
        <img className="w-55 h-60 ml-5" src={image} alt={title} />
      </div>
    </>
  )
}


