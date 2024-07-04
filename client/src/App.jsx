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
import { UserRegistration } from "./components/user/userRegistration/userRegistration";
import { UserHomePage } from "./components/user/userHome/userHome";
import { UserLogin } from "./components/user/userLogin/userLogin";
import { AdminContainer } from "./pages/admin/adminContainer/adminContainer";
import { UserViewCompanies } from "./components/user/viewCompanies/viewCompanies";
import { Footer2 } from "./components/common/footer2/footer2";
import { UserNavbar } from "./components/user/userNavbar/userNavbar";
import { CompanyHome } from "./components/company/companyHome/companyHome";
import NewAdminsidebar from "./components/AdminNewSidebar/newAdminsidebar";
import { ViewCompanyDetails } from "./components/user/viewCompaniesDetails/viewCompaniesDetails";
import { CompanySidebar } from "./components/company/companySidebar/companySidebar";
import { IpoForm } from "./components/company/Ipoform/ipoForm";
import Forgotpassword from "./components/common/forgetPassword/forgotpassword";

import { EtUserHomePage } from "./components/educational-tutors/et-userHome/EtUserHome";
import Gainer from "./components/Admin/Gainer/gainer";
import Loser from "./components/Admin/Losers/loser";
import SectorPerform from "./components/Admin/SectorPerform/sectorPerform";
import Requestfrom from "./components/Admin/Requestpage/requestfrom";
import StockProfit from "./components/Admin/StockProfit/stockProfit";
import AdminCount from "./components/Admin/Admincount/adminCount";
import { CompanyAbout } from "./components/company/companyAbout/companyAbout";
import { CompanyDashboard } from "./components/company/companyDashboard/companyDashboard";
import { AdminDashboard } from "./components/Admin/adminDashboard/adminDashboard";
import EtSignup from "./components/educational-tutors/et-signup/et-signup";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename="stock_it">
        <Routes>
          <Route path="/" element={<LandingPageHeader />} />

          {/* company pages */}

          <Route path="/companyHome" element={<CompanyHome />} />
          <Route path="/companyAbout" element={<CompanyAbout />} />

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
          <Route path="/companyDetails/:id" element={<ViewCompanyDetails />} />

          <Route path="/companysidebar" element={<CompanySidebar />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />

          {/* user pages  */}
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/userHome" element={<UserHomePage />} />
          <Route path="/userLogin" element={<UserLogin />} />

          <Route path="/userViewCompany" element={<UserViewCompanies />} />

          <Route path="/userabout" element={<UserHomePage />} />
          <Route path="/et" element={<EtUserHomePage />} />

          {/* admin pages  */}
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/adminsidebar" element={<AdminSidebar />} />
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route path="/landingheader" element={<LandingPageHeader />} />
          <Route path="/landingAbout" element={[<CommonNavbar />, <About />]} />

          {/* new  */}
          <Route path="/newsidebar" element={<NewAdminsidebar />} />
          <Route path="/etsignup" element={<EtSignup/>}/>

          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route
            path="/admin"
            element={[<AdminNavbar />, <AdminSidebar />, <CompanyRequest />]}
          />
          {/* <Route path="/admin" element={<AdminContainer />}/> */}
          <Route
            path="/resetPassword"
            element={[<AdminNavbar />, <Resetpassword />]}
          />

          <Route path="/adminNavbar" element={<AdminNavbar />} />
          <Route path="/requestpage/:id" element={<RequestPage />} />

          <Route path="/ipoform" element={<IpoForm />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />

          {/* Admin components */}
          <Route path="/gainer" element={<Gainer />} />
          <Route path="/loser" element={<Loser />} />
          <Route path="/sectorperform" element={<SectorPerform />} />
          <Route path="/requestfrom" element={<Requestfrom />} />
          <Route path="/stockprofit" element={<StockProfit />} />
          <Route path="/admincount" element={<AdminCount />} />

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
  
export default App;
