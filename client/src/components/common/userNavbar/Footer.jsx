import React from 'react'
import './Footer.css'
import img1 from "../../../assets/images/Frame 339.png"
import img2 from "../../../assets/images/twitter.png"
import img3 from "../../../assets/images/youtube.png"
import img4 from "../../../assets/images/facebook.png"

function Footer() {
  return (
    <div>
      <footer className='footer-h1'>
        <div class="row ">
          <div class="col ">
            <div className='left-footer-inner-box my-4'>
              <img src={img1} alt="" className='img-fluid' />
              <p className='my-2'>The goal of a successful trader <br />
                is to make the best traders</p>
            </div>
          </div>

          <div class="col ">
            <div className='middle-footer-inner-box my-5'>
              <li className='middle-footer-head'>Quick Links</li>
              <li>Home</li>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Team of Services</li>
            </div>
          </div>

          <div class="col ">
            <div className='right-footer-inner-box my-5'>
              <li>Contact Us</li>
              <li>Stockitofficial@gmail.com</li>
              <li> +91 - 7802569677</li>
              <div >
              <img src={img3} alt="" className='img-fluid mx-2 my-2' />
              <img src={img4} alt="" className='img-fluid mx-3' />
              <img src={img2} alt="" className='img-fluid mx-3' />
              </div>


            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer