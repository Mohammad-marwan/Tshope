import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Review() {
    const {id} = useParams()
    console.log(id);
    const formik = useFormik({
        initialValues:{
            rating: '',
            comment: ''
            
        },onSubmit:createReview,
    })
    async function createReview (){
        try{
            
            const {data} = await axios.post(`https://ecommerce-node4.onrender.com/products/${id}/review`,formik.values,{
                headers: {
                    Authorization: `Tariq__${localStorage.getItem('userToken')}`
                }
            })
            console.log(data);

        }catch(e){
            toast.error(e);
        }
    }
    useEffect(()=>{
        createReview();
    },[])
  return (
    <form onSubmit={formik.handleSubmit} className='w-50 m-auto shadow p-3 rounded my-3'>
        <select class="form-select" aria-label="Default select example "
        name='rating' value={formik.values.rating} onChange={formik.handleChange}>
  <option selected>Open this select menu</option>
  <option value="1">One star</option>
  <option value="2">Two stars</option>
  <option value="3">Three stars</option>
  <option value="3">four stars</option>
  <option value="3">five stars</option>
</select>
<div class="form-floating mt-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
   name='comment' value={formik.values.comment} onChange={formik.handleChange}></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
<button type='submit'  className='btn btn-success mt-3'>send</button>
      
    </form>
  )
}
