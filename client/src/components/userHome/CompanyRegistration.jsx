import React from 'react'
import './CompanyRegistration.css'
import img5 from '../../assets/images/image 8.png'

function CompanyRegistration() {
  return (

    <div className='CompanyRegistation-background'>
      <div className='CompanyRegistartion-inner-box '>
        <h2 className='CompanyRegistation-heading'>Company Registration</h2>
        <div class="row my-5">
          <div class="col-5 CompanyRegistraion-left-box">
            <img className='CompanyRegistration-logo my-5 img-fluid' src={img5} alt="" />
          </div>


          <div class="col-7 CompanyRegistraion-right-box">
            <div className='CompanyRegistration-form-box'>
              <form action="" >
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="text" class="form-label">Name</label>
                    <input type="email" class="form-control CompanyRegistration-inp" placeholder='Enter Company Adress' id="inputEmail4" />
                  </div>
                  <div class="col-md-6 ">
                    <label for="text" class="form-label">Company Type</label>
                     <select class="form-select select-box CompanyRegistration-inp" aria-label="Default select example">
                      <option selected className='CompanyRegistration-option'>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="text" class="form-label">City</label>
                    <input type="email" class="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Enter City' />
                  </div>
                  <div class="col-md-6">
                    <label for="text" class="form-label">state</label>
                    <input type="password" class="form-control CompanyRegistration-inp" id="inputPassword4" placeholder='Enter state' />
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="number" class="form-label">Pincode</label>
                    <input type="email" class="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Enter Pincode' />
                  </div>
                  <div class="col-md-6">
                    <label for="Email" class="form-label">Email Id</label>
                    <input type="password" class="form-control CompanyRegistration-inp" id="inputPassword4" placeholder='Enter Email Id' />
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="number" class="form-label">Contact Number</label>
                    <input type="email" class="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Enter Contact Number' />
                  </div>
                  <div class="col-md-6">
                    <label for="number" class="form-label">Registration number</label>
                    <input type="password" class="form-control CompanyRegistration-inp" id="inputPassword4" placeholder='Enter Registration Number' />
                  </div>
                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="file" class="form-label">comapany licences</label>
                    <input type="email" class="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Upload File' />
                  </div>
                  <div class="col-md-6 ">
                    <label for="text" class="form-label">Year Founded</label>

                    <select class="form-select select-box CompanyRegistration-inp" aria-label="Default select example">
                      <option selected className='CompanyRegistration-option'>Select Year</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                </div>

                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="file" class="form-label">Company Logo</label>
                    <input type="email" class="form-control CompanyRegistration-inp" id="inputEmail4" placeholder='Upload File' />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Company Website</label>
                    <input type="password" class="form-control CompanyRegistration-inp" id="inputPassword4" placeholder='Add website' />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Add Discription'></textarea>
                </div>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="password" class="form-label">password</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Password' />
                  </div>
                  <div class="col-md-6">
                    <label for="select" class="form-label">Confirm Pasword</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder='Re Enter Password' />
                  </div>
                </div>
                <button className='my-5 CompanyRegistration-button'>register</button>
                <p className='CompanyRegistration-footer'> Already have an account?Login Now!</p>
              </form>
             
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CompanyRegistration