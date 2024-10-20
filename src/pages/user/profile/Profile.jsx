import React, { useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Profile() {
    const getProfile = async() =>{
        try{
            const {data} = await axios.get(`https://ecommerce-node4.onrender.com/user/profile`,{
                headers:{
                    Authorization: `Tariq__${localStorage.getItem('userToken')}`
                }
            });
        }
       catch(error){
        toast.error(error.message);
       }
    }
    useEffect(()=>{
        getProfile();
    },[])
  return (
    <div>
      
    </div>
  )
}
