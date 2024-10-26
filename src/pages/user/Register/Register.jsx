import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import * as yup from 'yup';
import style from './Register.module.css'

export default function Register() {
  const schema = yup.object({
    userName: yup.string().required('UserName is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
  })
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: async () => {
      const {data}= await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
      console.log(data);
    },validationSchema:schema
  })
 
  return (
   <div className={style.bg}>
     <div className="container">
     <form onSubmit={formik.handleSubmit}className={`${style.bgregister} w-50 m-auto d-flex flex-column shadow p-3 rounded`}>
      <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="UserName"
    name='userName' value={formik.userName} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">UserName</label>
    {formik.errors.userName?<div className='alert alert-danger'>{formik.errors.userName}</div>:null}
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email?<div className='alert alert-danger'>{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    name='password' value={formik.password} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password?<div className='alert alert-danger'>{formik.errors.password}</div>:null}
    <button className='btn btn-light my-3' type="submit">Register</button>
  </div>
  </form>
     </div>
    

   </div>

      
    
  )
}
