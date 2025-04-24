import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";

const URL = "https://fakestoreapi.com/products";

export const Main = ({ filter }) => {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </section>
  );
};