import React from "react";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";


const LandingPage = () => {


  const [products, setProducts]=useState([])
    const fetchProducts = async () => {
      try {
        const res =await axios.get("http://localhost:3000/products");
        console.log(res.data.products);
        setProducts(res.data.products)
      } catch (error) {
        console.log(error);
      }
    };
  
  
    useEffect(()=>{
      fetchProducts()
    },[])


  return (
    <div className="">
      <h1>Created Landing page</h1>
    </div>
  );
};

export default LandingPage;
