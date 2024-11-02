import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Laoder from '../../../components/user/Laoder/Laoder.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown , AiOutlineArrowUp  } from "react-icons/ai"
export default function AllProduct() {
  const [page ,setPage] =useState(1);
  const [pageList,setPageList] = useState([]);
    const [products , setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState("");
   const allProducts = async()=>{
    try{
        const {data} = await axios.get(`https://ecommerce-node4.onrender.com/products?page=${page}&limit=5&sort=${sort}&search=${search}`);
        setProducts(data.products);
        console.log(data);
        const numberOfPages = Math.ceil( data.total / 5);
        createPageList(numberOfPages);
        
    }
   
   catch(e){
    console.error(e);
   }
 function createPageList(numberOfPages){
    let pages = [];
    for(let i=1; i<=numberOfPages; i++){
        pages.push(<li class="page-item" onClick={()=>setPage(i)}><a class="page-link" href="#">{i}</a></li>);
    }
    setPageList(pages);
  }

}

useEffect(()=>{
    allProducts();
},[page,search,sort]);
if(products.length == 0)return <Laoder/>;
  return (
    <>
    <div className="row d-flex align-items-center"> 
      <div className="col-lg-6">
     <form className="form-floating mx-4 mt-5">
  <input type="text" className="form-control" id="floatingInputValue" placeholder="search" defaultValue="test@example.com" value={search} onChange={(e)=>setSearch(e.target.value)} />
  <label htmlFor="floatingInputValue">search by products</label>
</form>
      </div>
      <div className="col-lg-6">
        <div className="d-flex gap-3 align-items-center mt-5">
          <label className='fs-5 fw-bold '>sort by price:</label>
        <button className=' d-flex align-items-center justify-content-center rounded-circle'style={{width:"30px",height:"30px"}} onClick={()=>setSort('price')}>
          <AiOutlineArrowDown /> 
        </button>
        <button className='d-flex align-items-center justify-content-center rounded-circle'style={{width:"30px",height:"30px"}} onClick={()=>setSort('-price')}>
          <AiOutlineArrowUp />
        </button>
        </div>
      </div>
    </div>
    <div className="container mt-3">
        <div className="row">
        <h2 className='text-center'>Products</h2>
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
                            <div className="card-footer d-flex gap-3  justify-content-center align-items-center">
                            <span className='color-warning fw-bold '>Price:<span className='text-success'>${product.price}</span></span>
                            <Link className='btn btn-dark' to={`/ProductsDetails/${product.id}`}>ProductsDetails</Link>
                            </div>
                            
                        </div>
                       

                    </div>
                )
            }
            <div className="d-flex justify-content-center align-items-center 100-vh my-3 ">
                 <nav aria-label="Page navigation example shadow p-3 rounded ">
  <ul class="pagination m-auto">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {
      pageList.map((item) => item)
    }
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            </div>
           
           
            

        </div>
    </div>
      
    </>
  )
}
