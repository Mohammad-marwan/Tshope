import React from 'react'
import Categores from '../Categores/Categores.jsx'
import style from './Home.module.css'
import image from './HomeImg/watch.jpg'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
  
    <>
    <main>
    <div id="carouselExampleSlidesOnly" className="carousel slide vh-100" data-bs-ride="carousel">
  <div className="carousel-inner 100-vh">
    <div className="carousel-item active h-100">
      <div className={style.bg}>
        <div className="row" style={{height:"100%"}}>
          <div className="col-lg-12" >
            <div className="d-flex flex-column justify-content-center align-items-start ms-5 " style={{height:"100%"}}>
            <h1 className='text-light'>Welcome to <span className='fs-1 text-info'>MVMT</span></h1>
        <p className='text-light'>Discover the latest fashion trends and accessories</p>
        <Link className="btn btn-info" to={'/allproducts'}>Shop Now</Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</div>

    <Categores  />
    <div className="about m-3 shadow p-3 bg-light rounded ">
      <div className="container">
       <div className="row">
        <div className="col-lg-6 col-md-12">
          <h2 className='fs-3'>About MVMT</h2>
          <p className='fw-bold'>Bringing the unexpected to classic timekeeping since 2013.</p>
          <p>For ten years, our small team of creatives have been proud to bring you what’s fresh in California Modern watchmaking. Every MVMT is dreamed up collaboratively from our Venice Beach headquarters, and is built to run with the precision, purpose and x-factors needed to make the best of the time you keep.</p>
          <button type="button" className="btn btn-info">Learn More</button>
  

        </div>
        <div className="col-lg-6 col-md-12 shadow p-3 bg-light rounded ">
          <img src={image} style={{width:"100%"}} />
          </div>
       </div>
      </div>
    </div>
    </main>
    
    </>
  )
}
