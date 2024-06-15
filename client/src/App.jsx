import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import  { LandingPage } from "./pages/common/landingPage/landingPage";
import { UserHome } from "./pages/user/home/userHome";
import { UserSignup } from "./pages/user/signup/userSignup";
import { UserLogin } from "./pages/user/login/userLogin";
import { UserProfile } from "./pages/user/profile/userProfile";
import "./App.css";

import Footer from "./components/common/userNavbar/Footer";
import CompanyRegistration from "./components/userHome/CompanyRegistration";
import AdminLogin from "./components/userHome/AdminLogin";


function App() {
  return (
    <>
      <BrowserRouter basename="/stock_it">
        <Routes>
          {/* users  */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/CompanyRegistration" element={<CompanyRegistration/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>

          {/* company  */}
          <Route path="/company/home" element={<CompanyHome />} />
          <Route path="/company/signup" element={<CompanySignup />} />
          <Route path="/company/login" element={<CompanyLogin />} />
          <Route path="/company/profile" element={<CompanyProfile />} />

          {/* admin  */}
          <Route path="/admin/login" element={<CompanyLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin/company-request"
            element={<AdminComapnyRequest />}
          />

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
