import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CommonNavbar from "./components/common/commonNavbar";
import LandingPageHeader from "./components/common/landingPage-2";

import Footer from "./components/common/userNavbar/Footer";
import CompanyRegistration from "./components/company/CompanyRegistration";
import AdminLogin from "./components/adminLogin/AdminLogin";
import About from "./components/common/About";
import CompanyRequest from "./components/company/CompanyRequest";
import AdminSidebar from "./components/common/adminSidebar";

import AdminNavbar from "./components/common/adminNavbar";
import Resetpassword from "./components/company/resetPassword";
import RequestPage from "./components/company/requestPage";
import CompanyLogin from "./components/company/CompanyLogin/companyLogin";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename="stock_it">
        <Routes>
          <Route path="/" element={<LandingPageHeader />} />

          {/* company  */}
          <Route
            path="/CompanyRegistration"
            element={<CompanyRegistration />}
          />
          <Route
            path="/companyrequest"
            element={[<AdminNavbar />, <AdminSidebar />, <CompanyRequest />]}
          />
          <Route
            path="/companylogin"
            element={[<CommonNavbar />, <CompanyLogin />]}
          />

          <Route
            path="/AdminLogin"
            element={[<CommonNavbar />, <AdminLogin />]}
          />
          <Route
            path="/adminsidebar"
            element={[<AdminNavbar />, <AdminSidebar />]}
          />
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route
            path="/landingheader"
            element={[<CommonNavbar />, <LandingPageHeader />, <Footer />]}
          />
          <Route
            path="/about"
            element={[<CommonNavbar />, <About />, <Footer />]}
          />

          <Route
            path="/AdminDashboard"
            element={[<CommonNavbar />, <AdminSidebar />, <CompanyRequest />]}
          />

          <Route
            path="/resetPassword"
            element={[<AdminNavbar />, <Resetpassword />]}
          />
          <Route path="/adminNavbar" element={<AdminNavbar />} />
          <Route path="/requestpage/:id" element={<RequestPage />} />

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
