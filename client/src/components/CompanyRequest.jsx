import React from 'react'
import './CompanyRequest.css'
import img1 from '../assets/images/Ellipse 18.svg'
function CompanyRequest() {
  return (

    <div className='companyRequest-body' >
      <div className='companyRequest-heading'>
        <p>Company Requests</p>
      </div>
      <div className='companyRequesest-second-box' role='group'>
        <div className='companyrequest-enterpage'>

          <p className='companyRequest-entries'>Entries per page</p>

        </div>
        <select class="form-select form-select-sm companyRequet-dropdown " aria-label="Small select example">
  <option selected> 15</option>
  <option value="1">16</option>
  <option value="2">17</option>
  <option value="3">18</option>
</select>
      </div>

      <div className='companyRequest-details'>
        <div className='companyRequest-innerbox1'>
          <img className='companyRequest-logo' src={img1} alt="" />
          <p className='companyRequest-subheading'>subway</p>
        </div>
        <table className='companyRequest-table'>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td className='companyRequest-data'>subway</td>
          </tr>
          <tr>
            <td>Company Type</td>
            <td>:</td>
            <td className='companyRequest-data'>  Restaurant</td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>:</td>
            <td className='companyRequest-data'>  1234567890</td>
          </tr>
          <tr>
            <td>Email Id</td>
            <td>:</td>
            <td className='companyRequest-data'>tata@gamail.com</td>
          </tr>
        </table>
        <p className='companyRewquest-viewmore'>View more</p>
      </div>

    </div>


  )
}

export default CompanyRequest