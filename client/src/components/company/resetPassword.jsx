import React, { useState } from 'react'
import img1 from '../../assets/images/shieldLogo.png'
import './resetPassword.css'
import axiosInstance from '../../apis/axiosInstance'

function Resetpassword() {
    const [state, setState] = useState({ oldpassword: "", newpassword: "", confirmpassword: "" })
    function tochange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const tosave =(a)=> {
        a.preventDefault();
        if(state.newpassword!==state.confirmpassword){
            alert("The passwords doesn't match ")
        }else{
        axiosInstance.post("/resetPwd", state)
            .then((res) => {
                console.log(res);
                if (res.data.status==200) {
                    alert(res.data.msg)
                } else {
                    alert(res.data.msg)
                }
            })
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={tosave}>
                    <div className='resetpassword-background'>
                        <div className='resetpassword-box'>
                            <h3 className='resetpassword-heading'>Reset Password</h3>
                            <div class="row">
                                <div class="col-5 resetpassword-logo">
                                    <img src={img1} alt="loginPage logo" className='img-fluid my-4' />
                                </div>
                                <div class="col-7 resetpassword-inputs">
                                    <div class="mb-3 resetpassword-inner">
                                        <label for="exampleFormControlInput1" class="form-label">Old Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Old password" name='oldpassword' onChange={tochange} />
                                    </div>
                                    <div class="mb-3 resetpassword-inner">
                                        <label for="exampleFormControlInput1" class="form-label">New Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter New password" name='newpassword' onChange={tochange} />
                                    </div> <div class="mb-3 resetpassword-inner">
                                        <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Re Enter password" name='confirmpassword' onChange={tochange} />
                                    </div>
                                    <button class="reset-button" value="submit" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Resetpassword