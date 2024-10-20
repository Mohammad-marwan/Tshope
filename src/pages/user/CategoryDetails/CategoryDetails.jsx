import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CategoryDetails() {
    const [products , setProducts] = useState([]);
    const {ID} = useParams();
    const getCategores = async ()=>{
        const {data} = await axios.get(`https://ecommerce-node4.onrender.com/products/category/${ID}`);
        setProducts(data.products);
        console.log(data.products);
    }


    useEffect(()=>{
        getCategores()
    }, [])
  return (
    <div className="container">
    <div className="row">
        {products.map(pro =>
         <div className=" col-lg-4">
          <div className="card mb-4 shadow p-3 mb-5 bg-light rounded" key={pro._id}>
            <div className="card-header text-center">
                <h2>{pro.name.substring(0,10)}</h2>
            </div>
                <div className="card-Img">
                    <img src={pro.mainImage.secure_url} />
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
