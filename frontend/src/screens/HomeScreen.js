import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MassageBox';
import axios from 'axios';
export default function HomeScreen(props) {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        setLoading(true);
        const {data}=await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      }
      catch (err){
        setError(err.massage);
        setLoading(false);
      }
    }
    fetchData();
  },[]);
  return (
    <div>
      {loading ? <LoadingBox /> 
      : error ? <MassageBox variant="danger">{error}</MassageBox>
    :
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    }
    </div>
  );
}