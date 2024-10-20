import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../../components/user/Laoder/Laoder.jsx'
export default function Cart() {
    const [product , setProducts] = useState([]);
    const [totalincreaseQty , settotalincreaseQty] = useState([]);
    const getCart = async ()=>{
        try{ const token =localStorage.getItem('userToken');
        const {data} = await axios.get(`https://ecommerce-node4.onrender.com/cart/`,{
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        setProducts(data.products);
        console.log(data.products);}
     
        catch(error){
            toast.error(error.message);
        }finally{
          return  <Loader/>
        }
    }
    useEffect(()=>{
        getCart()
    },[])
    const removeItem = async (productId)=>{
        try{
             const token = localStorage.getItem('userToken');
        const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`,{
            productId:productId
        },{
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        console.log(data);
        }catch(e){
            toast.error(e.message);
        }
       
    }
    const clearCart = async ()=>{
      try { const token = localStorage.getItem('userToken');
        const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`,{},{
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        console.log(data);}
        catch(e){
            toast.error(e.message);
        }finally{
          return  <Loader/>
        }
    }
    const increaseQty = async (productId)=>{
      try{ const token = localStorage.getItem('userToken');
        const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/incraseQuantity`,{
            productId:productId
        },{
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        settotalincreaseQty(data.cart.products);}
        catch(error){
            toast.error(error.message);
        }finally{
          return  <Loader/>
        }
    }
    const decraseQuantity = async (productId)=>{
      try { const token = localStorage.getItem('userToken');
        const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/cart/decraseQuantity`,{
            productId:productId
        },{
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        settotalincreaseQty(data.cart.products);}
        catch(error){
            toast.error(error.message);
        }finally{
          return  <Loader/>
        }
    }

 
  return (
    <>
    
       {
        product.map(pro =>
            <div className="div">
            <img src={pro.details.mainImage.secure_url} />
            {totalincreaseQty.map(product =>
                <h2>{product.quantity}</h2>
            )} 
            
            <button className='btn btn-dark' onClick={()=>removeItem(pro.productId)}>delete</button>
            <button className='btn btn-dark' onClick={clearCart}>clearCart</button>
            <button className='btn btn-dark' onClick={()=>increaseQty(pro.productId)}>increase qty</button>
            <button className='btn btn-dark' onClick={()=>decraseQuantity(pro.productId)}>decraseQuantity</button>
            <Link to={'/CreateOrder'} className='btn btn-dark'>CreateOrder</Link>
            <Link to={'/Review'} className='btn btn-dark'>Review</Link>
            </div>
        )
      
       }
     
  
    
       
         </>
  )
}
