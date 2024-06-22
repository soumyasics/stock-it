import React from 'react'
import './adminNavbar.css'
import logo from '../../assets/images/Frame 339.png'
import logo2 from '../../assets/images/adminlogo.png'

function AdminNavbar() {
  return (
    <div className='adminNavbar'>
            <nav class="navbar">
                <div class="container-fluid navlogo">
                    <img src={logo} alt="" />
                    <form class="d-flex adminlogo">
                        <img src={logo2} alt="" />
                        <button class="btn" type="submit">Admin</button>
                    </form>
                </div>
            </nav>
    </div>
  )
}

export default AdminNavbar