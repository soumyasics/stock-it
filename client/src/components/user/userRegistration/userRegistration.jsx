import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import './userRegistration.css'
import img1 from '../../../assets/images/shieldLogo.png'
import profilePic from '../../../assets/images/userprofile.svg'


export const UserRegistration = () => {
  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div className="userRegistration">
          <div className="userRegistration-main">
            <div className="userRegistration-head">
              <h1>User Registration</h1>
              <div className="userRegistration-profile">
                <img src={profilePic} alt="Profile" />
              </div>
            </div>
            <div className="userRegistration-content">
              <div className="userRegistration-logo">
                <img src={img1} alt="logo" />
              </div>
              <div className="userRegistration-inputs">
                <div className="userRegistration-input-1">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                      <label htmlFor="lastname">Last Name</label>
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                  </div>
                </div>
                <div className="userRegistration-input-2">
                  <div className="userRegistration-gender">
                    <h2>Gender</h2>
                    <label htmlFor="male">M</label>
                    <input type="radio" name="gender" />
                    <label htmlFor="female">F</label>
                    <input type="radio" name="gender" />
                    <label htmlFor="other">Other</label>
                    <input type="radio" name="gender" />
                  </div>
                  <div className="form-group">
                    <label>DOB</label>
                    <div className="dob">
                      <input type="number" placeholder="Date" />
                      <input type="number" placeholder="Month" />
                      <input type="number" placeholder="Year" />
                    </div>
                  </div>
                </div>
                <div className="userRegistration-input-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" placeholder="Enter Address" aria-label="First name" />
                </div>
                <div className="userRegistration-input-4">

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" placeholder="Enter City" aria-label="First name" />
                    </div>
                    <div className="col">
                      <label htmlFor="state">State</label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="pincode">Pincode</label>
                      <input type="number" className="form-control" placeholder="Enter Pincode" aria-label="First name" />
                    </div>
                    <div className="col">
                      <label htmlFor="contact">Contact Number</label>
                      <input type="number" className="form-control" placeholder="Enter Contact Number" aria-label="Last name" />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="email">Email ID</label>
                      <input type="email" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                      <label htmlFor="proof">Id proof</label>
                      <input type="file" className="form-control" placeholder="upload" aria-label="Last name" />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="password">password</label>
                      <input type="password" className="form-control" placeholder="Enter Password" aria-label="First name" />
                    </div>
                    <div className="col">
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Re Enter Password" aria-label="Last name" />
                    </div>
                  </div>

                  <div className="userRegistration-bankdetail">
                    <h3>Bank Details</h3>

                    <div className="row fieldgap">
                      <div className="col">
                        <label htmlFor="account">Demat Account Number <span className="star-color">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter Your Demat Account Name" aria-label="First name" />
                      </div>
                      <div className="col">
                        <label htmlFor="bankname">Bank Name <span className="star-color">*</span></label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>                      </div>
                    </div>


                    <div className="row fieldgap">
                      <div className="col">
                        <label htmlFor="ifsc">IFSC Code <span className="star-color">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter IFSC Code" aria-label="First name" />
                      </div>
                      <div className="col">
                        <label htmlFor="bankbranch">Branch Name <span className="star-color">*</span></label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>  
                      </div>
                    </div>

                    <button type="submit">Register</button>
                    <p className="login-link">Already have an account?<a href="#">Login Now</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
