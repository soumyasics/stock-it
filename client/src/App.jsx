import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CommonNavbar from "./components/commonNavbar";
import LandingPageHeader from "./components/userHome/header/landingPage-2";

import Footer from "./components/common/userNavbar/Footer";
import CompanyRegistration from "./components/userHome/CompanyRegistration";
import AdminLogin from "./components/userHome/AdminLogin";
import About from "./components/userHome/About";
import CompanyRequest from "./components/CompanyRequest";
import AdminSidebar from "./components/common/adminSidebar";

import AdminNavbar from "./components/common/adminNavbar";
import Resetpassword from "./components/userHome/resetPassword";
import RequestPage from "./components/userHome/requestPage";








function App() {
  return (
    <>
      <BrowserRouter basename="/stock_it">
        <Routes>



          <Route path="/footer" element={<Footer />} />
          <Route path="/CompanyRegistration" element={[<CommonNavbar />, <CompanyRegistration />, <Footer />]} />
          <Route path="/AdminLogin" element={[<CommonNavbar />, <AdminLogin />]} /> 
          <Route path="/adminsidebar" element={[<AdminNavbar />, <AdminSidebar />]} />
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route path="/landingheader" element={[<CommonNavbar />, <LandingPageHeader />]} />
          <Route path="/about" element={[<CommonNavbar />, <About />, <Footer />]} />
          <Route path="/companyrequest" element={[<CommonNavbar />, <CompanyRequest />]} />

          <Route path="/resetPassword" element={[<AdminNavbar/>,<Resetpassword />]} />
          <Route path="/adminNavbar" element={<AdminNavbar />} />
          <Route path="/requestpage" element={<RequestPage/>}/>

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
