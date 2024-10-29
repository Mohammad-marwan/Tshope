import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { AiFillCaretLeft,AiFillCaretRight  } from "react-icons/ai";
import { CiSearch } from "react-icons/ci"
import { FaShoppingBag,FaUser  } from "react-icons/fa";
import { UserContext } from '../../../Context/Context.jsx'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const {isLogin , setIsLogin,userData , setUserData} = useContext(UserContext);
    const [color , setColor] = useState(false);
    const navigate = useNavigate();
    const handleLogout= ()=>{
      localStorage.removeItem("userToken");
      setIsLogin(false);
      setUserData({})
      navigate("/Login");
  


    }
  
    
  return (
    
<nav className={`${style.bg} navbar navbar-expand-lg shadow p-3 bg-light rounded `}>
  <div className="container">
    <a className="navbar-brand" href="#">MVMT<AiFillCaretRight/><AiFillCaretLeft/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
        {isLogin?
        
      <>
      <li className="nav-item">
          <h3 className={`nav-link active ${style.ColorText}`} aria-current="page" to={'/'}>Welcom <span className='text-danger'>{userData.userName}</span></h3>
        </li>
      <li className="nav-item">
          <Link className={`nav-link active ${style.ColorText}`} aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${style.ColorText}`} aria-current="page" to={'/AllProducts'}>All Products</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active ${style.ColorText}`} aria-current="page" to={'/CreateOrder'}>CreateOrder</Link>
        </li>
        <li className="nav-item">
       
          <a className={`nav-link active ${style.ColorText}`} onClick={handleLogout} aria-current="page">Logout</a>
        </li>
        <li className="nav-item"></li>
      </>
      :
      <>
       <li className="nav-item">
          <Link className="nav-link active" to={'/Register'}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/Login'}>Login</Link>
        </li>
      </>
      }
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
      <Link className={`nav-link active ${style.ColorText}`}><li><CiSearch className={`${style.icon} fw-3`}/></li></Link>  
        <Link className={`nav-link active ${style.ColorText}`} to={'/Cart'}>  <li>cart <FaShoppingBag className={`${style.icon}`}/></li> </Link>
        <Link className={`nav-link active ${style.ColorText}`} to={'/Profile'}> <li> Profile <FaUser  className={`${style.icon}`}/></li> </Link>
      </ul>
    </div>
  </div>
</nav>
  )
}
