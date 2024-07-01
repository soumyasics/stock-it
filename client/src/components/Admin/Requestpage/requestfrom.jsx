import React from 'react'
import './requestfrom.css'
import img1 from '../../../assets/images/sample.png'

function Requestfrom() {
    let data = [{ companyname: 'Subway',profilePic:'' }
        ,{ companyname: 'Pen & pencil' },
        { companyname: 'Cruize' }
    ]
    return (
        <div className='requestfrom-box'>
            <div className='requestfrom-head'>
                <h3>Request from companies</h3>
            </div>
            {
                data.map((e) => {
                    return (
                        <div className='requestfrom-innerbox'>
                            <div className='requestfrom-innerbox-image'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='requestfrom-innerbox-content' >
                                <p>You have New Request from <a href="">{e.companyname}</a> </p>
                            </div>
                            <div className='requestfrom-innerbox-btn'>
                                <button type='sumbit'>view</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Requestfrom