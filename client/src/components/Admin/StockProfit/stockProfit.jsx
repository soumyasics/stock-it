import React from 'react'
import './stockProfit.css'
import img1 from '../../../assets/images/sample.png'

function StockProfit() {
    let state = ([
    { companyname: 'Ksolves India',percent:'42.17'},
    { companyname: 'Nestle India', percent: '23.36' },
    { companyname: 'Network People', percent: '28.34'},
    { companyname: 'Tips Industries', percent: '53.63' }
    ])
    return (
        <div>
            <div className='stockprofit-box'>
                <div className='stockprofit-head'>
                    <h3>Top 4 High Profit Stocks </h3>
                </div>
                <div className='stockprofit-subhead'>
                    <p>5 yr OPM%</p>
                </div>
                {
                    state.map((e) => {
                        return (
                            <table className='stockprofit-content'>
                                <tr>
                                    <div className='stockprofit-image'>
                                        <td><img src={img1} alt="" /></td>
                                    </div>
                                    <td>{e.companyname}</td>
                                    <td className='text-success'>{e.percent}</td>
                                </tr>
                            </table >
                        )
                    })
                }
            </div>
        </div >
    )
}

export default StockProfit