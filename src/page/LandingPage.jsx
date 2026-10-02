import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ItemsCard from "../components/ItemsCard";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="">
      <div className="mt-10 mx-10 grid grid-cols-2 gap-4">
        {products.map((item) => (
          <div key={item.id}>
            {" "}
            <ItemsCard product={item} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
