import React from 'react'
import './requestPage.css'
import img1 from '../../assets/images/companyprofilepic.png'
import img2 from '../../assets/images/crossbtn.png'


function RequestPage() {
  return (
    <div className='requestpage-bg'>
      <div className='requestpage-header'>
        <img src={img1} alt="" />
        <div className='requestpage-companyname'>
          <h2>Pen & pencil</h2>
        </div>
      </div>
      <div className='requestpage-crossbtn'>
          <img src={img2} alt="" />
        </div>
      <div className='requestpage-paragraph'>
        <p>Pen & Pencil is an organisation that creates customized education software for coaching institutions, online teachers and schools</p>
      </div>
      <div className='requestpage-content'>
        <table>
          <tr>
            <td>Name</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Company Type</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>City</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>State</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Email Id</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Registration Number</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Company License</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Year Founded</td>
            <td>-</td>
            <td></td>
          </tr>
          <tr>
            <td>Company Website</td>
            <td>-</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className='requestpage-btn'>
        <button class="btn" type="submit">Accept</button>
        <button class="btn " type="submit">Reject</button>
      </div>

    </div>
  )
}

export default RequestPage