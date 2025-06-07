import ProductCard from "./ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

    useEffect(() => {
    axios.get("/data.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;