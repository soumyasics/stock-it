import React from 'react'
import './commonNavbar.css'
import img1 from '../assets/images/Frame 339.png'


function CommonNavbar() {
    return (
        <div>
                        <nav class="navbar commonNavbar">
                <div className='container'>
                    <a class="navbar-brand commonNavbar-image" href="#">
                        <img src={img1} className='img-fluid'/>
                    </a>
                    <div className='commonNavbar-right'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <button>login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CommonNavbar