import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import "./userRegistration.css";
import img1 from "../../../assets/images/shieldLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DateOfBirthSelector } from "./dateOfbirthSelector";
import axiosMultipartInstance from "../../../apis/axiosMultipartInstance";
import { toast } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);

  const toggleButton = () => {
    setShowPassword(!showPassword);
  };
  const toggleButton1 = () => {
    setShowPassword1(!showPassword1);
  };
  const navigate = useNavigate();
  // const [userData, setUserData] = useState({
  //   firstName: "fname",
  //   lastName: "lname",
  //   gender: "male",
  //   dob: "24-02-2024",
  //   address: "my-address"
  //   city: "city",
  //   state: "state",
  //   pincode: "123456",
  //   photo: null,
  //   idProof: null,
  //   contactNumber: "1234567890",
  //   email: "myemail@gmail.com",
  //   password: "123123",
  //   confirmPassword: "123123",
  //   dematACNumber: "12341234",
  //   bankName: "sbin",
  //   branchName: "vgr",
  //   ifscCode: "12341234",
  // });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    photo: null,
    idProof: null,
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    dematACNumber: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === "pincode") {
      if (String(value).length > 6) {
        return;
      }
    }
    if (name === "contactNumber") {
      if (String(value).length > 10) {
        return;
      }
    }

    setUserData({ ...userData, [name]: value });
  };

  const redirectToUserLogin = () => {
    navigate("/UserLogin");
  };

  const updateDOB = (value) => {
    setUserData({ ...userData, dob: value });
  };

  const redirectToLogin = () => {
    // navigate()
    navigate("/userLogin");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      gender,
      dob,
      address,
      city,
      state,
      pincode,
      photo,
      idProof,
      contactNumber,
      email,
      password,
      confirmPassword,
      dematACNumber,
      bankName,
      branchName,
      ifscCode,
    } = userData;

    function validateFields() {
      if (!firstName) {
        toast.error("First name is required");
        return false;
      }
      if (!/^[a-zA-Z ]+$/.test(firstName)) {
        toast.error("Please enter valid first name");
        return;
      }
      if (!lastName) {
        toast.error("Last name is required");
        return false;
      }
      if (!/^[a-zA-Z ]+$/.test(lastName)) {
        toast.error("Please enter valid last name");
        return;
      }
      if (!gender) {
        toast.error("Gender is required");
        return false;
      }
      if (!dob) {
        toast.error("Date of birth is required");
        return false;
      }
      if (dob.length < 9) {
        toast.error("Date of birth is invalid");
        return false;
      }
      if (!address) {
        toast.error("Address is required");
        return false;
      }
      if (!city) {
        toast.error("City is required");
        return false;
      }
      if (!state) {
        toast.error("State is required");
        return false;
      }
      if (!pincode) {
        toast.error("Pincode is required");
        return false;
      }
      if (pincode.length !== 6) {
        toast.error("Please enter 6 digit pincode");
        return false;
      }
      if (!contactNumber) {
        toast.error("Contact number is required");
        return false;
      }
      if (!email) {
        toast.error("Email is required");
        return false;
      }
      if (!password) {
        toast.error("Password is required");
        return false;
      }
      if (password.length < 8) {
        toast.error("Password needs minimum 8 characters");
        return;
      }
      if (!confirmPassword) {
        toast.error("Confirm password is required");
        return false;
      }
      if (!dematACNumber) {
        toast.error("Demat AC number is required");
        return false;
      }
      if (!bankName) {
        toast.error("Bank name is required");
        return false;
      }
      if (!branchName) {
        toast.error("Branch name is required");
        return false;
      }
      if (!ifscCode) {
        toast.error("IFSC code is required");
        return false;
      }
      if (password !== confirmPassword) {
        toast.error("passwords do not match");
        return false;
      }
      if (!idProof) {
        toast.error("ID proof is required");
        return false;
      }
      if (!photo) {
        toast.error("Photo is required");
        return false;
      }
      return true;
    }

    if (!validateFields()) {
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("pincode", pincode);
    formData.append("photo", photo);
    formData.append("idProof", idProof);
    formData.append("contactNumber", contactNumber);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("dematACNumber", dematACNumber);
    formData.append("bankName", bankName);
    formData.append("branchName", branchName);
    formData.append("ifscCode", ifscCode);
    console.log("formData", formData);

    sendDataToServer(formData);
  };
  const sendDataToServer = async (formData) => {
    try {
      const response = await axiosMultipartInstance.post(
        "/registerUser",
        formData
      );
      console.log("resg respo", response);
      if (response.status === 200) {
        toast.success("User registered successfully");
        console.log("resp", response);
        redirectToLogin();
      } else {
        // toast.error(response.data.data.msg);
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
      const msg = error?.response?.data?.msg || "Network issue";
      toast.error(msg);
    }
  };

  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div className="userRegistration">
          <div className="userRegistration-main">
            <div className="userRegistration-head">
              <h1>User Registration</h1>
              {/* <div className="userRegistration-profile">
                <img src={profilePic} alt="Profile" />
              </div> */}
            </div>
            <form className="userRegistration-content" onSubmit={handleSubmit}>
              <div className="userRegistration-logo">
                <img src={img1} alt="logo" />
              </div>
              <div className="userRegistration-inputs ">
                <div className="userRegistration-input-1">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>
                </div>
                <div className="userRegistration-input-2">
                  <div>
                    <label className="mt-3">Gender</label>
                    <br />
                    <div
                      className="userRegistration-gender  d-flex"
                      // style={{ height: "30px", width: "100px" }}
                    >
                      <label htmlFor="male">M</label> &nbsp;
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleChanges}
                      />
                      &nbsp; &nbsp;
                      <label className="ms-3" htmlFor="female">
                        F
                      </label>{" "}
                      &nbsp;
                      <input
                        onChange={handleChanges}
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      &nbsp;
                      <label className="ms-3" htmlFor="other">
                        Other
                      </label>{" "}
                      &nbsp;
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        onChange={handleChanges}
                      />
                      &nbsp;
                    </div>
                  </div>
                  <div className="form-group" style={{ marginLeft: "26%" }}>
                    <label>DOB</label>
                    <div className="dob d-flex" style={{ width: "300px" }}>
                      <DateOfBirthSelector updateDOB={updateDOB} />
                    </div>
                  </div>
                </div>
                <div className="userRegistration-input-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={userData.address}
                    onChange={handleChanges}
                  />
                </div>
                <div className="userRegistration-input-4">
                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City"
                        name="city"
                        value={userData.city}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        name="state"
                        value={userData.state}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Pincode"
                        onChange={handleChanges}
                        name="pincode"
                        value={userData.pincode}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Contact Number"
                        aria-label="Last name"
                        name="contactNumber"
                        value={userData.contactNumber}
                        onChange={handleChanges}
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="email">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={userData.email}
                        onChange={handleChanges}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="proof">Id proof</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="upload"
                        aria-label="Last name"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            idProof: e.target.files[0],
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="row fieldgap">
                    <div className="col">
                      <label htmlFor="password">Password</label>
                      {/* <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={handleChanges}
                        name="password"
                        value={userData.password}
                      /> */}
                      <InputGroup className="mb-3 userpasswordInput">
                        <Form.Control
                          placeholder="Enter Password"
                          type={showPassword ? "password" : "text"}
                          aria-label="password"
                          aria-describedby="basic-addon1"
                          name="password"
                          onChange={handleChanges}
                          value={userData.password}
                        />
                        <InputGroup.Text id="basic-addonUser1">
                          {showPassword ? (
                            <FaEyeSlash onClick={toggleButton} />
                          ) : (
                            <FaEye onClick={toggleButton} />
                          )}
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                    <div className="col">
                      <label htmlFor="confirmpassword">Confirm Password</label>
                      {/* <input
                        type="password"
                        className="form-control"
                        placeholder="Re Enter Password"
                        aria-label="Last name"
                        onChange={handleChanges}
                        name="confirmPassword"
                        value={userData.confirmPassword}
                      /> */}
                           <InputGroup className="mb-3 userpasswordInput">
                        <Form.Control
                          placeholder="Re Enter Password"
                          type={showPassword1 ? "password" : "text"}
                          aria-label="password"
                          aria-describedby="basic-addon1"
                          name="confirmPassword"
                          onChange={handleChanges}
                          value={userData.confirmPassword}
                        />
                        <InputGroup.Text id="basic-addonUser1">
                          {showPassword1 ? (
                            <FaEyeSlash onClick={toggleButton1} />
                          ) : (
                            <FaEye onClick={toggleButton1} />
                          )}
                        </InputGroup.Text>
                      </InputGroup>
                    </div>

                    <div className="col">
                      <label htmlFor="proof">Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="upload"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            photo: e.target.files[0],
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="userRegistration-bankdetail">
                    <h3>Bank Details</h3>

                    <div className="row fieldgap">
                      <div className="col">
                        <label htmlFor="account">
                          Demat Account Number{" "}
                          <span className="star-color">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Demat Account Name"
                          onChange={handleChanges}
                          name="dematACNumber"
                          value={userData.dematACNumber}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="bankname">
                          Bank Name <span className="star-color">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bank Name"
                          onChange={handleChanges}
                          name="bankName"
                          value={userData.bankName}
                        />
                      </div>
                    </div>

                    <div className="row fieldgap">
                      <div className="col">
                        <label htmlFor="ifsc">
                          IFSC Code <span className="star-color">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter IFSC Code"
                          onChange={handleChanges}
                          name="ifscCode"
                          value={userData.ifscCode}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="bankbranch">
                          Branch Name <span className="star-color">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Branch Name"
                          onChange={handleChanges}
                          name="branchName"
                          value={userData.branchName}
                        />
                      </div>
                    </div>

                    <button type="submit">Register</button>
                    <p className="login-link">
                      Already have an account?{" "}
                      <span
                        onClick={redirectToUserLogin}
                        className="text-primary"
                      >
                        Login Now{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
