import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ForgotPassword() {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: async()=>{
            const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/auth/sendcode`,
                formik.values

            );
            console.log(data);
            
        }
    
    })

  return (
    <form onSubmit={formik.handleSubmit}>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={formik.values.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    <button type='submit' className='btn btn-dark'>sendcode</button>
  </div>
</form>


  )
}
