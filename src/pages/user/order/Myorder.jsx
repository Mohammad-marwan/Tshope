import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';

export default function Myorder() {
  const [messageserrorserrors , setmessageserrors] = useState('')
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
        setmessageserrors(error.response.data.message)
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
    if(data.message == "success"){
      toast.success("Order Cancelled Successfully");
    }
    console.log(data); 
}

catch (error) {
  toast.error(error);
  setmessageserrors(error.response.data.message)
    }
}
if(info.length == 0)return <Laoder/>;
  return (
   <>
   {messageserrorserrors?<div className="alert alert-danger">{messageserrorserrors}</div>:null}
   <table className="table shadow p-3 mb-5 bg-body rounded">
  <thead>
    <tr>
      <th scope="col">address</th>
      <th scope="col">phoneNumber</th>
      <th scope="col">finalPrice</th>
      <th scope="col">name</th>
      <th scope="col">products</th>
    </tr>
  </thead>
  <tbody>
    { info.map(info =>

 <tr>
      <td>{info.address}</td>
      <td>{info.phoneNumber}</td> 
     <td>{info.finalPrice}</td>
       <td>{info.products.map(products =>
       <div className=""key={products.productId.id}>{products.productId.name.substring(0,5)}...</div>          
       )}</td>
       <td>{info.products.map(products =>
       <img style={{width:'50px'}} src={products.productId.mainImage.secure_url} key={info._id}/>        
       )}</td>
       <td><button onClick={()=>cancelOrder(info._id)} className='btn btn-danger' >cancle</button>  </td>
      
     
                      
      
    </tr>

    )  
    }

  </tbody>
</table>
   </>
  )
  /* <div>
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
    </div>*/ 
}
