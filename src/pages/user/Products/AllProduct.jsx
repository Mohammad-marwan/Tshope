import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';

export default function AllProduct(page) {
    const [products , setProducts] = useState([]);
   const allProducts = async(page=1)=>{
    try{
        const {data} = await axios.get('https://ecommerce-node4.onrender.com/products?page=1&limit=5');
        setProducts(data.products);
        console.log(data);
        const numberOfPages = Math.ceil( data.total / 5);
        console.log(numberOfPages);
        
    }
   
   catch(e){
    console.error(e);
   }
   const paginationLinks = ``;
   if(page > 1){
    paginationLinks +=`<button onClick=allProducts(${page-i}) class="page-link" aria-label="Previous"><span aria-hidden="true">&laquo;</span> </button>`
   }else{
    paginationLinks += `<button class="page-link disabled" aria-label="Previous"><span aria-hidden="true">&laquo;</span></button>`
   }
for(const i=1; i<numberOfPages; i++){
    paginationLinks += `<li class="page-item"><button onClick=allProducts(${i}) class="page-link" >${i}</button></li>`;
}
if(page > numberOfPages){
paginationLinks +=`<button onClick=allProducts(${page+i}) class="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span></button>`
}else{
    paginationLinks += `<button class="page-link disabled" aria-label="Previous"><span aria-hidden="true">&laquo;</span></button>`
}

}
useEffect(()=>{
    allProducts();
},[]);

  return (
    <>
    <div className="container mt-5">
        <div className="row">
            {
                products.map( product =>
                    <div className="col-lg-3 ">
                       <div className="card shadow p-3 mb-5 bg-light rounded" key={product._id}>
                            <div className="card-header">
                                <img style={{width:"100%"}} src={product.mainImage.secure_url} alt="product" />
                            </div>
                            <div className="card-body">
                                <h5>{product.name.substring(0,15)}...</h5>
                                <p>{product.description.substring(0,30)}...</p>
                            </div>
                            <div className="card-footer">
                            <span className='color-warning '>Price:<span className='text-success'>${product.price}</span></span>
                            </div>
                            
                        </div>
                       

                    </div>
                )
            }
            <nav aria-label="Page navigation example ">
  <ul class="pagination m-auto">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
           
            

        </div>
    </div>
      
    </>
  )
}
