import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
import Review from '../review/Review.jsx';

export default function ProductsDetails() {
  const {ProductsDetailsID} = useParams();
  const [products , setProducts] = useState({})
  const [ProductsImg , setProductsImg] = useState({});
  const [errors, setErrors] = useState(null);
  const getProducts = async ()=>{
    try{
       const {data}= await axios.get(`https://ecommerce-node4.onrender.com/products/${ProductsDetailsID}`);
    console.log(data);
    setProducts (data.product);
    setProductsImg(data.product.mainImage);
    }catch(e){
      setErrors(e.response.data.message);
    }
   
    
   ;
  }
  useEffect(()=>{
    getProducts()
  },[])
  const addToCart = async ()=>{
    try{    const token = localStorage.getItem('userToken');
    const {data} = await axios.post(`https://ecommerce-node4.onrender.com/cart/`,{
      productId:ProductsDetailsID
    },
  {
    headers: {
      Authorization: `Tariq__${token}`
    }
  })
  if(data.message == 'success'){
    toast.success("Add Product Success");
  }
}catch(e){
    toast.error(e.response.data.message)
    setErrors(e.response.data.message);
  }
 
  
  }
  if(JSON.stringify(products)== '{}')return <Laoder /> ; 
  return (
    <div className="container">
    <div className="row">
    <h1 className='text-center mt-3'>ProductsDetails</h1>
    {errors?<div className="alert alert-danger w-50 m-auto text-center">{errors}</div>:null}
      <div className='card'>
        <div className="card-header">
        <h2> {products.name}</h2>
        </div>
        <div className="card-body">
        <img src={ProductsImg.secure_url} />
        </div>
        <div className="card-footer d-flex justify-content-between gap-1 align-items-center fw-bold fs-5">
           <button  onClick={addToCart} className='btn btn-dark'>Add cart</button>
            <span className='color-warning '>Price:<span className='text-success'>${products.finalPrice}</span></span>
             <span className='color-warning '>discount:<span className='text-danger'>${products.discount}</span></span>
        </div>
        <div className="">
        <Review />
        </div>
  </div>    
    </div>
</div>
  )
}
