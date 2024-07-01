import React, { useState } from 'react'
import './gainer.css'

function Gainer() {
    let state = ([{ companyname: 'Adani Enterprises Ltd', price: '₹8387.03', percent: '+8.98%' },
    { companyname: 'Mahindra  Ltd', price: '₹7444.98', percent: '+7.08%' },
    { companyname: 'Axis Bank Ltd', price: '₹6791.09', percent: '+6.59%' },
    { companyname: 'Reliance', price: '₹3597.35', percent: '+6.01%' },
    { companyname: 'Maruti', price: '₹2890.04', percent: '+5.88%' }
    ])
    return (
        <div>
            <div className='gainer-box'>
                <div className='gainer-head'>
                    <h3>Gainers</h3>
                </div>
                <table className='gainer-content'>
                    {
                        state.map((e) => {
                            return (
                                <>
                                    <tr>
                                        <td>{e.companyname}</td>
                                        <td>{e.price}</td>
                                        <td className='price-clr'>{e.percent}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Gainer