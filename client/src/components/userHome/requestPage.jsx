import React, { useEffect, useState } from 'react'
import './requestPage.css'
import img2 from '../../assets/images/crossbtn.png'
import axiosInstance from '../../apis/axiosInstance'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../apis/baseUrl'

function RequestPage() {
  const [state, setState] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axiosInstance.post(`/viewCompanyById/66768c500c19004743abce81`)
      .then((response) => {
        console.log(response);
        setState(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <div className='requestpage-bg'>
        <div className='requestpage-header'>
          <img src={`${BASE_URL}${state?.logo?.filename}`} alt="profile" />
          <div className='requestpage-companyname'>
            <h2>{state.name}</h2>
          </div>
        </div>
        <div className='requestpage-crossbtn'>
          <img src={img2} alt="" />
        </div>
        <div className='requestpage-paragraph'>
          <p>{state.name}-{state.description}</p>
        </div>
        <div className='requestpage-content'>
          <table>
            <tr>
              <td>Name</td>
              <td>-</td>
              <td>{state.name}</td>
            </tr>
            <tr>
              <td>Company Type</td>
              <td>-</td>
              <td>{state.companyType} </td>
            </tr>
            <tr>
              <td>City</td>
              <td>-</td>
              <td>{state.district} </td>
            </tr>
            <tr>
              <td>State</td>
              <td>-</td>
              <td>{state.state} </td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td>-</td>
              <td>{state.pincode}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>-</td>
              <td>{state.contact}</td>
            </tr>
            <tr>
              <td>Email Id</td>
              <td>-</td>
              <td>{state.email}</td>
            </tr>
            <tr>
              <td>Registration Number</td>
              <td>-</td>
              <td>{state.regNo} </td>
            </tr>
            <tr>
              <td>Company License</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>Year Founded</td>
              <td>-</td>
              <td>{state.year}</td>
            </tr>
            <tr>
              <td>Company Website</td>
              <td>-</td>
              <td>{state.website}</td>
            </tr>
          </table>
        </div>
        <div className='requestpage-btn'>
          <button class="btn" type="submit" value="submit" on >Accept</button>
          <button class="btn" type="submit">Reject</button>
        </div>
    </div>
  )
}

export default RequestPage