import React, { useEffect, useState } from 'react'
import './activationPage.css'
import { BASE_URL } from '../../apis/baseUrl'
import axiosInstance from '../../apis/axiosInstance'
import { useParams } from 'react-router-dom'
import img1 from '../../assets/images/crossbtn.png'

function ActivationPage() {
    const [state, setState] = useState({ license: { filename: '' } })
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

    // const [active, setActive] = useState(); // Default state is inactive

    // const handleToggle = async () => {
    //     const newActiveState = !active;
    //     setActive(newActiveState);

    //     try {
    //         // API call based on the new state
    //         if (newActiveState) {
    //             await axiosInstance.post('/activateCompanyById/66768c500c19004743abce81', { active: newActiveState })
    //                 .then((res) => {
    //                     console.log(res);
    //                     if (res.data.status == 200) {
    //                         alert(res.data.msg)
    //                     }

    //                 })
    //         } else {
    //             await axiosInstance.post('/deActivateCompanyById/66768c500c19004743abce81', { active: newActiveState })
    //                 .then((res) => {
    //                     console.log(res);
    //                     if (res.data.status == 200) {
    //                         alert(res.data.msg)
    //                     }
    //                 })
    //         }
    //     } catch (error) {
    //         console.error('API call failed:', error);
    //         // Revert the state change if the API call fails
    //         setActive(active);
    //     }
    // }
    const handleActive = (id) => {
        console.log(id);
        axiosInstance.post(`/activateUserById/${id}`)
        .then((res)=>{
          if(res.data.status === 200){
            const updatedData = data.map((users) => {
              if (users._id === id){
                users.isActive = true;
              }
              return users;
            });
            setData(updatedData)
          }
        })
        .catch((err) => {
          console.log("Error",err);
        })
      }
    
      const handleDeactive = (id) => {
        axiosInstance.post(`/deActivateUserById/${id}`)
        .then((res) => {
          if(res.data.status === 200){
            const updatedData = data.map((users) => {
              if(users._id === id){
                users.isActive = false;
              }
              return users;
            })
            setData(updatedData);
          }
        })
        .catch((err) => {
          console.log("Error",err);
        })
      }
    
      const toggleUserActiveState = (users) => {
        if(users.isActive){
          handleDeactive(users._id)
        }
        else{
          handleActive(users._id)
        }
      }

    return (
        <div>
            <div className='activationpage-main'>
                <div className='activationpage-bg'>
                    <div className='activationpage-header'>
                        <img src={`${BASE_URL}${state?.logo?.filename}`} alt="profile" />
                        <div className='activationpage-companyname'>
                            <h2>{state.name}</h2>
                        </div>
                    </div>
                    <div className='activationpage-crossbtn'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='activationpage-paragraph'>
                        <p>{state.name}-{state.description}</p>
                    </div>
                    <div className='activationpage-content'>
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
                                <td><button type="button" class="modal-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    View License
                                </button></td>
                            </tr>
                            <tr>
                                <td>Year Founded</td>
                                <td>-</td>
                                <td>{state.year}</td>
                            </tr>
                            <tr>
                                <td>Company Website</td>
                                <td>-</td>
                                <td><a href={state.website}>{state.website}</a></td>
                            </tr>
                        </table>
                    </div>
                    <div className='activationpage-btn'>
                        {/* <div className={`toggle-button ${active ? 'active' : ''}`} onClick={handleToggle}>
                            <div className={`toggle-circle ${active ? 'active' : ''}`}></div>
                            <span className={`toggle-label ${active ? 'active' : ''}`}>{active ? 'Active' : 'Inactive'}</span>
                        </div> */}
                        <button
                            className={`toggle-button ${users.isActive ? 'active' : 'inactive'}`}
                            onClick={() => { toggleUserActiveState(users) }}
                        >
                            {users.isActive ? 'Active' : 'Inactive'}
                        </button>

                    </div>

                    {/* Modal page */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Company License</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body modal-image">
                                    <img src={`${BASE_URL}${state?.logo?.filename}`} alt="profile" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivationPage