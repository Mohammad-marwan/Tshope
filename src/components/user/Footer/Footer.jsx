import React from 'react'
import Logo from './FooterLogo/NavbarLogo.jpg'
import style from './Footer.module.css'
import { AiFillCaretLeft,AiFillCaretRight  } from "react-icons/ai";
import { FaFacebookF,FaInstagram,FaTwitter,FaTiktok   } from "react-icons/fa";
export default function Footer() {
  return (
    <>
     <footer className=' text-dark h-25 shadow p-3 bg-light rounded '>
  <div className="container ">
    <div className="row g-5">
      <div className="col-lg-6 col-md-12 d-flex flex-column gap-3">
      <div className="start_item d-flex flex-column gap-3">
        <div >
        <h4>MVMT<AiFillCaretRight/><AiFillCaretLeft/></h4>

        </div>
        <p>Increase savings to 20% off your first purchase and keep up with our latest drops, special editions and members-only sales.
        </p>
       <form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-danger" type="submit">Search</button>
</form>
<div className="row">
  <div className="col-lg-3 d-flex py-2  gap-3">
 <a href='https://www.facebook.com/' ><FaFacebookF className={`${style.icon}`}/></a>
 <a href='https://www.instagram.com/' ><FaInstagram className={`${style.icon}`}/></a>
 <a href='https://x.com/?lang=ar' ><FaTwitter className={`${style.icon}`}/></a>
 <a href='https://www.tiktok.com/en/' ><FaTiktok className={`${style.icon}`} /></a>
  </div>
</div>

        </div>
      </div>
      <div className="col-lg-6 col-md-12  ">
        <div className={'end_footer text-center'} >
       <div className="row">
        <div className='col-lg-4 col-md-6 col-sm-12 d-flex flex-column gap-3 '>
          <h5 className='mt-3 '>Shop MVMT</h5>
          <div className='d-flex flex-column gap-3'>
          <span className={'text-muted '}>Shop Watches</span>
          <span  className='text-muted '>Shop Eyewear</span>
          <span className='text-muted '>Shop Jewelry</span>
          <span className='text-muted '>Shop Insta</span>
          </div>

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column gap-3 ">
        <h5 className='mt-3'>Customer Service</h5>
        <div className="d-flex flex-column gap-3">
          <span className='text-muted'>Accessibility Statement</span>
          <span className='text-muted'>My Account</span>
          <span className='text-muted'>Contact Us</span>
          <span className='text-muted'>Shipping & Returns</span>
          </div>
          
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column gap-3 ">
        <h5 className='mt-3'>#jointhemvmt</h5>
        <div className="d-flex flex-column gap-3">
          <span className='text-muted'>Our Story</span>
          <span className='text-muted'>Our Blog</span>
          <span className='text-muted'>Ambassadors & Affiliates</span>
          <span className='text-muted'>US Privacy</span>
          </div>
          
        </div>
       </div>
      </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
