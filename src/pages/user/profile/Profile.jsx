import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaFacebookF,FaInstagram,FaTwitter,FaTiktok   } from "react-icons/fa";
import style from './Profile.module.css';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
import Myorder from '../order/Myorder.jsx'

export default function Profile() {
    const [profile ,setProfile] =useState({});
    const getProfile = async() =>{
        try{
            const {data} = await axios.get(`https://ecommerce-node4.onrender.com/user/profile`,{
                headers:{
                    Authorization: `Tariq__${localStorage.getItem('userToken')}`
                }
            });
            setProfile(data.user);
            console.log(data.user);
        }
       catch(error){
        toast.error(error.message);
       }
    }
    useEffect(()=>{
        getProfile();
    },[])
    if(JSON.stringify(profile)== '{}')return <Laoder /> ; 
  return (
    <div className="container">
        <div className="Profile my-5 text-center shadow p-3 bg-light rounded">
            <h2>Profile</h2>
            <div className="row mt-2">
                <div className="col-lg-12">
                   <div className="row ">
                   <div className="col-lg-4 col-md-6">                   
                    <h4 className='fs-6'><span className='text-warning'>userName:</span>{profile.userName}</h4>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <h4 className='fs-6'><span className='text-warning'>email:</span>{profile.email}</h4>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <h4 className='fs-6'><span className='text-warning'>status:</span>{profile.status}</h4>
                    </div>
                   </div>
                </div>
                <div className="row">
                <div className=" d-flex justify-content-center py-2 gap-4">
 <a href='https://www.facebook.com/' ><FaFacebookF className={`${style.icon}`}/></a>
 <a href='https://www.instagram.com/' ><FaInstagram className={`${style.icon}`}/></a>
 <a href='https://x.com/?lang=ar' ><FaTwitter className={`${style.icon}`}/></a>
 <a href='https://www.tiktok.com/en/' ><FaTiktok className={`${style.icon}`}/></a>
  </div>
  <Myorder className='me-5' /> 
                    
                </div>
            </div>

        </div>
    </div>
  )
}
