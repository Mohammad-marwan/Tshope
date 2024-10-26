import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Sendcode.module.css'
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
    <div className={style.bg}>
      <div className="container">
     <div className={` mt-4`}>
     <form onSubmit={formik.handleSubmit} className={` w-50 m-auto d-flex flex-column shadow p-3 rounded`}>
      <div className={`${style.bgsendcode}`}>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={formik.values.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    <button type='submit' className='btn btn-light mt-3'>sendcode</button>
  </div>
  </div>
</form>
     </div>
      </div>
    </div>


  )
}
