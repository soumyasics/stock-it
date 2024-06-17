import React from 'react'
import './adminSidebar.css'
import imgGif from '../../assets/images/headergif.gif'
import titleImg from '../../assets/images/Group 398.png'
import vector1 from '../../assets/images/Vector.png'
import vector2 from '../../assets/images/company-icon.png'

function AdminSidebar() {
    return (
        <div className='adminSidebar'>
            <div className='adminSidebar-gif'>
                <img src={imgGif} alt="" />
            </div>
            <div className='adminSidebar-h1'>
                <div className='adminSidebar-main'>
                    <div className='adminSidebar-title-head'>
                        <img src={titleImg} alt="" />
                    </div>
                    <div className='adminSidebar-content '>
                        <div className='adminSider-grid'>
                            <div className='adminSidebar-user'>
                                <img src={vector1} alt="" />
                                <h4>User</h4>
                            </div>
                            <div className='adminSidebar-compaines'>
                                <img src={vector2} alt="" />
                                <div class="dropdown  content-2">
                                    <button class="btn btn-secondary dropdown-toggle content-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Companies
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark content-2">
                                        <li><a class="dropdown-item active" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminSidebar