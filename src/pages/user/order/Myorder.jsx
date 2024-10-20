import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Myorder() {
    const [info , setInfo] = useState([]);
    const getOrder = async()=>{
        try{ const {data} = await axios.get(`https://ecommerce-node4.onrender.com/order`,{
            headers: {
                Authorization: `Tariq__${localStorage.getItem('userToken')}`
            },
        })
        setInfo(data.orders);
        console.log(data.orders);
        }
       catch(error){
        toast.error('Error Fetching Data');
       }
        finally{
            <h2>Loading..</h2>
        }
    }
    useEffect(()=>{
        getOrder();
    },[])

const cancelOrder = async(id)=>{
    try{
    const {data}= await axios.patch(`https://ecommerce-node4.onrender.com/order/cancel/${id}`,{

    },
        {
            headers: {
                Authorization: `Tariq__${localStorage.getItem('userToken')}`
            },
        }
    ) 
    console.log(data); 
}

catch (error) {
        console.log(error);
    }
}

  return (
    <div>
      {
        info.map(info =>
            <div>
            <h4>{info.address}</h4>
            <h4>{info.phoneNumber}</h4>
            {info.products.map((pro) =>
            <div>
            <h5>{pro.finalPrice}</h5>
             <img src={pro.productId.mainImage.secure_url} />
             </div>                     
               )}
               <button onClick={()=>cancelOrder(info._id)} className='btn btn-dark' >cancle</button>  
            </div>
        )
      }
    </div>
  )
}
