import React from "react";

export const Card = (product) => {
  const { id, title, price, description, category, image } = product;
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-100 p-5 object-cover border-b-4 border-cyan-500"
        src={image}
        alt={title}
      />
      <div className="p-5">
        <h1 className="text-lg font-semibold text-gray-800 truncate">{title}</h1>
        <h2 className="text-xl font-bold text-cyan-500 mt-2">${price}</h2>
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{description}</p>
        <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{category}</p>
      </div>
    </div>
  );
};