import React from 'react'
import Categores from '../Categores/Categores.jsx'
import style from './Home.module.css'
export default function Home() {
  return (
  
    <>
    <main>
    <div id="carouselExampleSlidesOnly" className="carousel slide vh-100" data-bs-ride="carousel">
  <div className="carousel-inner 100-vh">
    <div className="carousel-item active h-100">
      <div className={style.bg}></div>
    </div>
  </div>
</div>

    <Categores  />
    </main>
    
    </>
  )
}
