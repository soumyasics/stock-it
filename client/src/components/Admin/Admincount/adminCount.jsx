import React from 'react'
import './adminCount.css'
import userimg from '../../../assets/images/stock.png'
import companyimg from '../../../assets/images/companyicon.svg'
import Eduimg from '../../../assets/images/edicon.svg'
import stocksimg from '../../../assets/images/hearticon.svg'


function AdminCount() {
    return (
        <div>
            <div className='admincount-main'>
                <div className='admincount-block'>
                    <div className='admincount-block-image'>
                        <img src={userimg} alt="" />
                    </div>
                    <div className='admincount-block-head'>
                    <h3>User</h3>
                    <p>9954</p>
                    </div>
                </div>
                <div className='admincount-block'>
                    <div className='admincount-block-image'>
                        <img src={companyimg} alt="" />
                    </div>
                    <div className='admincount-head'>
                    <h3>Companies</h3>
                    <p>85</p>
                    </div>
                </div>
                <div className='admincount-block'>
                    <div className='admincount-block-image'>
                        <img src={Eduimg} alt="" />
                    </div>
                    <div className='admincount-head'>
                    <h3>Educational Tutors</h3>
                    <p>22</p>
                    </div>
                </div>
                <div className='admincount-block'>
                    <div className='admincount-block-image'>
                        <img src={stocksimg} alt="" />
                    </div>
                    <div className='admincount-head'>
                    <h3>Stocks</h3>
                    <p>80</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCount