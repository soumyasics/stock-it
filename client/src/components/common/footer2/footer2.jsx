import React from 'react'
import './footer2.css'
import img1 from "../../../assets/images/Frame 339.png"
import img2 from "../../../assets/images/twitter.png"
import img3 from "../../../assets/images/youtube.png"
import img4 from "../../../assets/images/facebook.png"

export const Footer2 = () => {
  return (
    <div>
      <div className="footer2">
        <div className="row ">
          <div className="col ">
            <div className='left-footer-inner-box my-4'>
              <img src={img1} alt="" className='img-fluid' />
              <p className='my-2 footer-text'>The goal of a successful trader <br />
                is to make the best traders</p>
            </div>
          </div>

          <div className="col ">
            <div className='middle-footer-inner-box my-5'>
              <li className='footer-head'>Quick Links</li>
              <li className='footer-text'>Home</li>
              <li className='footer-text'>About</li>
              <li className='footer-text'>Privacy Policy</li>
              <li className='footer-text'>Team of Services</li>
            </div>
          </div>

          <div className="col ">
            <div className='right-footer-inner-box my-5'>
              <li className='footer-head'>Contact Us</li>
              <li className='footer-text'>Stockitofficial@gmail.com</li>
              <li className='footer-text'> +91 - 7802569677</li>
              <div >
              <img src={img3} alt="" className='img-fluid mx-2 my-2' />
              <img src={img4} alt="" className='img-fluid mx-3' />
              <img src={img2} alt="" className='img-fluid mx-3' />
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
