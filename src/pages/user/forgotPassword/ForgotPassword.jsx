import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

export default function ForgotPassword() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          code: '',
        },
        onSubmit: async()=>{
            const {data} = await axios.patch(`https://ecommerce-node4.onrender.com/auth/forgotPassword`,
                formik.values

            );
            console.log(data);
            
        }
    
    })
  return (
   <form onSubmit={formik.handleSubmit}>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name="email" value={formik.values.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="floatingPassword" placeholder="New Password"
    name="password" value={formik.values.password} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">New Password</label>
  </div>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingPassword" placeholder="Code"
    name="code" value={formik.values.code} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">Code</label>
  </div>
  <button type="submit" className='btn btn-dark mb-3' >Reset Password</button>
</form>

  )
}
