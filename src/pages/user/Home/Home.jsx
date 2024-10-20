import React from 'react'
import Categores from '../Categores/Categores.jsx'
import img from './HomeImg/MVMTW.jpg'
export default function Home() {
  return (
  
    <>
    <main>
    <div id="carouselExampleSlidesOnly" className="carousel slide vh-100" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active h-100"
    style={{
      backgroundImage:`url(${img})`,
    }}>
    </div>
  </div>
</div>

    <Categores />
    </main>
    
    </>
  )
}
