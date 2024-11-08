import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
export default function CategoryDetails() {
    const [products , setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const {ID} = useParams();
    const getCategores = async ()=>{
try{
        const {data} = await axios.get(`https://ecommerce-node4.onrender.com/products/category/${ID}`);
        setProducts(data.products);
        console.log(data.products);}
        catch(errors){
            setErrors(e.response.data.message);
        }finally{
            
        }
    }


    useEffect(()=>{
        getCategores()
    }, [])
    if(products.length == 0)return <Laoder/>;
  return (
    <div className="container">
    <div className="row">
    {errors?<div className="alert alert-danger w-50 m-auto text-center">{errors}</div>:null}
    <h1 className='text-center mt-3'>CategoryDetails</h1>
        {products.map(pro =>
         <div className=" col-lg-4">
          <div className="card mb-4 shadow p-3 mb-5 bg-light rounded" key={pro._id}>
            <div className="card-header text-center">
                <h2>{pro.name.substring(0,10)}</h2>
            </div>
                <div className="card-Img">
                    <img src={pro.mainImage.secure_url} style={{width:"100%"}}/>
                    <div className="card-footer d-flex justify-content-between align-items-center fw-bold fs-5 ">
                            <Link className='btn btn-dark' to={`/ProductsDetails/${pro.id}`}>ProductsDetails</Link>
                            <span className='color-warning '>Price:<span className='text-success'>{pro.finalPrice}$</span></span>
                        </div>
                </div>
                </div>
                </div> 
        )}
       
        
    </div>
</div>
  
        

  )
}
