import React from 'react'
import logo from '../../../assets/images/Frame 339.png'
import './etnavbar.css'
function Etnavbar() {
  return (
    <div>
          <div className="etNavbar">
      <nav className="navbar">
        <div className="container-fluid etnavlogo">
          <img src={logo} alt="" />
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Etnavbar