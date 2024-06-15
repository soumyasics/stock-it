import React, { useState } from 'react'
import './AdminLogin.css'
import img6 from '../../assets/images/image 8.png'

function AdminLogin() {
  let username = "admin@gmail.com"
  let password = "admin@123"
  let a = "";
  const [state, setState] = useState({ username: '', password: '' })
  function btnchange(input) {
    setState({ ...state, [input.target.name]: input.target.value })

  }
  function btnsubmit(input) {
    input.preventDefault();
    console.log(state);
    if (state.username == a) {
      alert("enter a username")
    }
    else if (state.username !== username) {
      alert("inorrect username")
    }
    else if (state.password == a) {
      alert("Enter password ")
    }
    else if (state.password !== password) {
      alert("Incorrect password")
    }
    else {
      alert("Login sucessfully")
    }



  }



  return (
    <div>
      <div className='AdminLogin-background'>
        <div className='AdminLogin-box'>
          <h3 className='AdminLogin-heading display-7'>Admin Login</h3>
          <div class="row">
            <div class="col-5 AdminLogin-left-box">
              <img src={img6} alt="loginPage logo" className='img-fluid my-4' />
            </div>

            <div class="col-7 AdminLogin-left-box">
              <div className='AdminLogin-left-inner-box my-5'>
                <form action="" onSubmit={btnsubmit}>
                  <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Username</label>
                    <input type="text" className="form-control AdminLogin-input" id="formGroupExampleInput" placeholder="Enter Username" onChange={btnchange} name='username' />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">password</label>
                    <input type="password" className="form-control AdminLogin-input" id="formGroupExampleInput2" placeholder="Enter Password" onChange={btnchange} name='password' />
                  </div>

                  <button type="submit" value="submit" class="btn btn-primary AdminLogin-button my-4 " >Login</button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AdminLogin