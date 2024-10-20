import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { useContext } from 'react';
import { UserContext } from '../../../Context/Context.jsx'
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import style from './Login.module.css'; 


export default function Login() {
  const {isLogin , setIsLogin,userData , setUserData} = useContext(UserContext);
  const [errors,setErrors] = useState("");
  const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required')
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit:userDataLogin
     
,validationSchema:schema
  })
  async function userDataLogin  (){
    try{
      const {data}= await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values);
      console.log(data);
      if(data.message == 'success'){
        toast.success('Logged in successfully');
        localStorage.setItem('userToken',data.token);
        setIsLogin(true);
        const decoded = jwtDecode(data.token);
        setUserData(decoded);
        console.log(decoded); 
      }
    }
    catch(errors){
      
      setErrors(errors.response.data.message);
    
    }

  }


  return (
    <>
    <div className="container">
    <h2>{errors}</h2>
     <form onSubmit={formik.handleSubmit} className={`${style.bg} w-50 m-auto d-flex flex-column shadow p-3 bg-body rounded`}>
  <div className="form-floating my-3 text-center">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email?<div className='alert alert-danger'>{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" className="form-control " id="floatingPassword" placeholder="Password"
    name='password' value={formik.password} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password?<div className='alert alert-danger'>{formik.errors.password}</div>:null}
    <div className="formBtn d-flex justify-content-between align-items-center my-3 ">
    <button className='btn btn-white ' type="submit">Login</button>
    <Link to={'/Sendcode'}>Sendcode</Link>
    <Link  to={'/ForgotPassword'}>ForgotPassword</Link>
    </div>
  </div>
  </form>
    </div>
  </>

      
    
  )
}
