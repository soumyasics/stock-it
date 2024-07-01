import React from 'react'
import './sectorPerform.css'

function SectorPerform() {
    let state = ([{ sectorname: 'Automotive', mktcap: '2,546,596.00', change: 4530.91 , percent: 0.18 },
    { sectorname: 'Banking & Financial Services ', mktcap: '7,603,902.58', change:   17166.61, percent:0.23 },
    { sectorname: 'Cement & Construction', mktcap: '935,774.02 ', change:   -2593.95  , percent:-0.28},
    { sectorname: 'Chemicals', mktcap: '1,449,261.70', change: -3604.69, percent: -0.25 },
    { sectorname: 'Conglomerates', mktcap: '697,405.37  ', change: -2634.25, percent: -0.38 },
    { sectorname: 'Consumer Durables', mktcap: '87,418.91  ', change: 43.62, percent: 0.05 },

    ])
    return (
        <div>
            <div className='sectorperform-box'>
                <div className='sectorperform-head'>
                    <h3>Sector performance</h3>
                </div>
                <table className='sectorperform-content'>
                    <tr>
                        <th>Sector Name</th>
                        <th>Mkt Cap</th>
                        <th>Change</th>
                        <th>%Chg</th>
                    </tr>
                    {
                        state.map((e) => {
                            return (
                                <>
                                    <tr>
                                        <td>{e.sectorname}</td>
                                        <td>{e.mktcap}</td>
                                        <td className={`${e.change}`>0?'text-success':'text-danger'} >{e.change}</td>
                                        <td className={`${e.percent}`>0?'text-sucess':'text-danger'}>{e.percent}</td>
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

export default SectorPerform