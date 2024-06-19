import React from 'react'
import './CommonNavbar.css'
import img1 from '../assets/images/Frame 339.png'



function CommonNavbar() {
  return (
    <div>
      <nav class="navbar commonNavbar">
        <div class="container">
          <a class="navbar-brand commonNavbar-image" href="#">
            <img src={img1} />
          </a>
          <div className='commonNavbar-right'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <div className='right-btn'>
              <button>login</button>
              </div>
              
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CommonNavbar