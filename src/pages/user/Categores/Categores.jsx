import React, { useState } from 'react'
import style from './Categores.module.css'
import { Link } from 'react-router-dom';
import useFetchData from '../../../customHooks/useFetchData.jsx';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Categores() {
    const {data, error, loading} = useFetchData(`https://ecommerce-node4.onrender.com/categories/active`);
    console.log(data);
   
    if(loading){
        return <Laoder />;
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
    
    

  return (
    <div className="container">
        <div className="row">
            {data.categories.map(pro =>
             <div className="col-lg-4">
              <div className="card shadow p-3 mb-5 bg-light rounded" key={pro._id}>
                <div className="card-hedar">
                    <h2 className='text-center'>{pro.name}</h2>
                </div>
                    <div className="card_Img ">
                        <img src={pro.image.secure_url} className={`${style.image}`} />
                        <div className="card-footer">
                            <Link className='btn btn-dark m-auto' to={`/CategoryDetails/${pro.id}`}>CategoryDetails</Link>
                        </div>
                    </div>
                    </div>
                    </div> 
            )}
           
            
        </div>
    </div>
      
    
   
  )
}
