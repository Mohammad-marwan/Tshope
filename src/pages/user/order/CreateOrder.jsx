import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function CreateOrder() {
  const [errors,setErrors] = useState("");
    const formik = useFormik({
        initialValues: {
          couponName: '',
          address: '',
          phone: '',
        },
        onSubmit: async()=>{
          try{ const {data} = await axios.post(`https://ecommerce-node4.onrender.com/order`,
              
                formik.values

              ,{
                headers: {
                  Authorization: `Tariq__${localStorage.getItem('userToken')}`
                }
              }
                

            );  
            console.log(data);
            setLaoders(data);
            
          }
            catch(errors)
            {
              setErrors(errors.response.data.message);
               
            }finally{
              <h2>Laoding</h2>
            }
          
            
        }
    
    })
      
  return (
    <>
    <h1 className='text-center mt-3'>Create Order</h1>
 {errors?<div className='alert alert-danger'>{errors}</div>:null}
   <form onSubmit={formik.handleSubmit} className='w-50 m-auto mb-5 shadow p-3 rounded'>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="couponName"
    name="couponName" value={formik.values.couponName} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">couponName</label>
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingPassword" placeholder="address"
    name="address" value={formik.values.address} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">address</label>
    {formik.errors.address?<div className='alert alert-danger'>{formik.errors.address}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="number" className="form-control" id="floatingPassword" placeholder="phone"
    name="phone" value={formik.values.phone} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">phone</label>
    {formik.errors.phone?<div className='alert alert-danger'>{formik.errors.phone}</div>:null}
  </div>
  <div className=" d-flex gap-3">
  <button type="submit" className='btn btn-success mb-3' >Create order</button>
  <Link to={'/Myorder'} className='btn btn-success mb-3'>Myorder</Link>
  </div>
</form>
</>
  )
}
