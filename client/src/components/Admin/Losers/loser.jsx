import React from 'react'
import './losers.css'

function Loser() {
    let state = ([{ companyname: 'Coal In dia Ltd', price: '₹838', percent: '-10.98%' },
    { companyname: 'Hindalco industries ltd', price: '₹744', percent: '-8.08%' },
    { companyname: 'NTPC Ltd', price: '₹679', percent: '-7.59%' },
    { companyname: 'Yes Bank', price: '₹359', percent: '-7.01%' },
    { companyname: 'Eichermot', price: '₹289', percent: '-6.88%' }
    ])
    return (
        <div>
            <div className='loser-box'>
                <div className='loser-head'>
                    <h3>Losers</h3>
                </div>
                <table className='loser-content'>
                    {
                        state.map((e) => {
                            return (
                                <>
                                    <tr>
                                        <td>{e.companyname}</td>
                                        <td>{e.price}</td>
                                        <td className='loser-clr'>{e.percent}</td>
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

export default Loser