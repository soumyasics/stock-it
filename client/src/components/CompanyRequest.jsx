import React, { useEffect, useState } from 'react'
import './CompanyRequest.css'
import img1 from '../assets/images/Ellipse 18.svg'
import axiosInstance from '../apis/axiosInstance'
import { BASE_URL } from '../apis/baseUrl'

function CompanyRequest() {
  const [state, setState] = useState([])
  useEffect(() => {
    axiosInstance.post("/viewCompanies")
      .then((res) => {
        console.log(res);
        setState(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (

    <div>


      <div className='companyRequest-body' >
        <div className='companyRequest-heading'>
          <p>Company Requests</p>
        </div>
        <div className='comapnyRequest-first-box'>
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
          <div className='comapanyRequest-search-box'>
            <input type='search' className='companyRequest-serchbox' placeholder='Companies'  />
          </div>
        </div>
        {
          <div class="container-fluid">

            <div className='row row-cols-5'>
              {

                state.map((e) => {
                  return (
                    <div>
                      <div className='companyRequest-details '>
                        <div className='companyRequest-innerbox1'>
                          <img className='companyRequest-logo img-fluid' src={`${BASE_URL}${e?.logo?.filename}`} alt="test   " />
                          <p className='companyRequest-subheading'>{e.name}</p>
                        </div>
                        <table className='companyRequest-table'>
                          <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td className='companyRequest-data'>{e.name}</td>
                          </tr>
                          <tr>
                            <td>Company Type</td>
                            <td>:</td>
                            <td className='companyRequest-data'>  {e.companyType}</td>
                          </tr>
                          <tr>
                            <td>Contact Number</td>
                            <td>:</td>
                            <td className='companyRequest-data'> {e.contact}</td>
                          </tr>
                          <tr>
                            <td>Email Id</td>
                            <td>:</td>
                            <td className='companyRequest-data'>{e.email}</td>
                          </tr>
                        </table>
                        <p className='companyRewquest-viewmore'>View more</p>
                      </div>


                    </div>
                  )
                })
              }
            </div>

          </div>

        }


        <div class="btn-group companyRequest-btngroup" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn ">Previous</button>
          <button type="button" class="btn ">Next</button>
        </div>

        <div>

        </div>

      </div>

    </div>


  )
}

export default CompanyRequest