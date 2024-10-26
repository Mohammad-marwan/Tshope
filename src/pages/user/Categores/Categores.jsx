import React, { useState } from 'react'
import style from './Categores.module.css'
import { Link } from 'react-router-dom';
import useFetchData from '../../../customHooks/useFetchData.jsx';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectCoverflow, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
   <div className="mt-3 shadow p-3 bg-light rounded ">
     <div className="container">
        <div className="row">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"
      >
            {data.categories.map(pro =>
            
             <div className="col-lg-4">
                <SwiperSlide>
              <div className="card shadow p-3 mb-5 bg-light rounded" key={pro._id}>
                <div className="card-hedar">
                    <h2 className='text-center'>{pro.name}</h2>
                </div>
                    <div className="card_Img ">
                        <img style={{width:'200px', display:'flex'}} src={pro.image.secure_url} className={`${style.image} m-auto`} />
                        <div className="card-footer">
                            <Link className='btn btn-dark text-center' to={`/CategoryDetails/${pro.id}`}>CategoryDetails</Link>
                        </div>
                    </div>
                    </div>
                     </SwiperSlide>
                    </div>  
                  
            )}
            </Swiper>
           
            
        </div>
    </div>
      
    
   </div>
   
  )
}
