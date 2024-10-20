import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CreateOrder() {
    const formik = useFormik({
        initialValues: {
          couponName: '',
          address: '',
          phone: '',
        },
        onSubmit: async()=>{
            const {data} = await axios.post(`https://ecommerce-node4.onrender.com/order`,
              
                formik.values

              ,{
                headers: {
                  Authorization: `Tariq__${localStorage.getItem('userToken')}`
                }
              }
                

            );
            console.log(data);
            
        }
    
    })
  return (
   <form onSubmit={formik.handleSubmit}>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="couponName"
    name="couponName" value={formik.values.couponName} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">couponName</label>
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingPassword" placeholder="address"
    name="address" value={formik.values.address} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">address</label>
  </div>
  <div className="form-floating mb-3">
    <input type="number" className="form-control" id="floatingPassword" placeholder="phone"
    name="phone" value={formik.values.phone} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">phone</label>
  </div>
  <button type="submit" className='btn btn-dark mb-3' >Create order</button>
  <Link to={'/Myorder'}>Myorder</Link>
</form>

  )
}
