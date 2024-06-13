
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { LandingPage } from "./pages/common/landingPage/landingPage";
import { UserHome } from "./pages/user/home/userHome";
import { UserSignup } from "./pages/user/signup/userSignup";
import { UserLogin } from "./pages/user/login/userLogin";
import { UserProfile } from "./pages/user/profile/userProfile";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/stock_it">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/profile" element={<UserProfile />} />


          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
