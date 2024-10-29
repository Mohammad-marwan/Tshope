import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../../components/user/Laoder/Laoder.jsx'
import { FaTrashAlt } from "react-icons/fa";
export default function Cart() {
    const [product, setProducts] = useState([]);
    const [totalincreaseQty, settotalincreaseQty] = useState([]);
    const[cartChange,setCartChange] = useState(0);
    const getCart = async () => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.get(`https://ecommerce-node4.onrender.com/cart/`, {
                headers: {
                    Authorization: `Tariq__${token}`
                },
            })
            setProducts(data.products);
            console.log(data.products);
        }

        catch (error) {
            toast.error(error.message);
        } 
    }
    useEffect(() => {
        getCart()
    }, [cartChange])
    const removeItem = async (productId) => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`, {
                productId: productId
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                },
            })
            console.log(data);
            if(data.message == "success"){
                toast.success("Item removed successfully");
              
            }
        } catch (e) {
            toast.error(e.message);
        }

    }
    const clearCart = async () => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`, {}, {
                headers: {
                    Authorization: `Tariq__${token}`
                },
            })
            console.log(data);
            if(data.message == "success"){
                toast.success("Cart cleared successfully");
            }
        }
        catch (e) {
            toast.error(e.message);
        } 
    }
    const increaseQty = async (productId) => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/incraseQuantity`, {
                productId: productId
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                },
            })

            setCartChange((prev=>prev+1))
            settotalincreaseQty(data.cart.products);
        }
        catch (error) {
            toast.error(error.message);
        } 
    }
    const decraseQuantity = async (productId) => {
        try {
            const token = localStorage.getItem('userToken');
            const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/decraseQuantity`, {
                productId: productId
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                },
            })
            setCartChange((prev=>prev-1))
            settotalincreaseQty(data.cart.products);
        }
        catch (error) {
            toast.error(error.message);
        } 
    }
    if(product.length == 0)return <Loader/>;
    return (
        <>
            <h1 className='text-center'>Cart</h1>
            <div className="container shadow p-3 mb-5 bg-body rounded">
                <div className="div w-100 d-flex ">
                    <button className='btn btn-danger ms-auto' onClick={clearCart}><FaTrashAlt className='fs-2 ' />ClearCart</button>
                </div>
                <div className="row justify-content-between align-items-start">


                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                product.map(pro => 
                                    <tr>
                                        <th scope="row">{pro.details.name.substring(0, 20)}...</th>
                                        <td>{<img style={{width:'50px'}} src={pro.details.mainImage.secure_url} />}</td>
                                        <td><span className='btn btn-primary text-white p-1' onClick={()=>increaseQty(pro.details._id)}>+</span> <span>{pro.quantity}</span> <span onClick={()=> decraseQuantity(pro.details._id)} className='btn btn-primary text-white p-1'>-</span></td>
                                        <td>{pro.details.finalPrice * pro.quantity}$</td>
                                        <td><button className='btn btn-danger' onClick={()=>removeItem(pro.productId)}>removeItem</button></td>
                                    </tr>
                                
                                )
                            }


                        </tbody>
                    </table>
                    {/* <div className="col-lg-3">
                        <h2>{pro.details.name.substring(0, 20)}</h2>
                        <img src={pro.details.mainImage.secure_url} />
                    </div>
                    <div className="col-lg-3">
                        <h2>finalPrice:<span className='fs-4 text-success'>{pro.details.finalPrice}$</span></h2>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row m-auto fw-bold">
                            <span className='fs-5 '>quantity:{pro.quantity}</span>
                            <div className="col-lg-12 d-flex gap-2">
                                <button className='btn btn-dark ' onClick={() => increaseQty(pro.productId)}>+</button>
                                <button className='btn btn-dark' onClick={() => decraseQuantity(pro.productId)}>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className=" d-flex flex-column w-50 gap-4 ">
                            <Link to={'/CreateOrder'} className='btn btn-dark '>CreateOrder</Link>
                            <Link to={'/Review'} className='btn btn-dark'>Review</Link>
                            <button className='btn btn-danger' onClick={() => removeItem(pro.productId)}>delete</button>
                        </div>
                    </div>
                */}
      



            </div>
        </div >
     
  
    
       
         </>
  )
}
