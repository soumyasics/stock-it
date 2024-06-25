import React from 'react'
import './commonNavbar.css'
import img1 from '../../assets/images/Frame 339.png'
import { Link } from 'react-router-dom'


function CommonNavbar() {
    return (
        <div>
                        <nav class="navbar commonNavbar">
                <div className='container'>
                    <a class="navbar-brand commonNavbar-image" href="#">
                        <img src={img1} className='img-fluid'/>
                    </a>
                    <div className='commonNavbar-right'>
                    <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <button>  <Link to="/AdminLogin">login</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CommonNavbar