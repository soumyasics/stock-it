import { useState } from "react";
import { CompanySidebar } from "../companySidebar/companySidebar";
import { IpoForm } from "../Ipoform/ipoForm";
import { ViewIPOStatus } from "../viewIPOStatus/viewIPOStatus";
import { CompanyProfile } from "../companyProfile/companyProfile";
import CompanyArticleList from "../companyArticleList/companyArticleList";
import CompanyAddArticle from "../companyAddArticles/companyAddArticle";
import CompanyAddComplaint from "../companyAddComplaint/companyAddComplaint";
import CompanyViewUser from "../companyViewuser/companyViewUser";

export const CompanyDashboard = () => {
  const [activePage, setActivePage] = useState("profile");
  const changePage = (value) => {
    setActivePage(value);
  };
  const rediectToviewArticle=()=>{
    setActivePage("view-Articles")
  }
  return (
    <div className="d-flex " style={{ height: "120vh", backgroundColor: "#374151" }}>
      <CompanySidebar changePage={changePage} />
      <div
        className=" w-100"
        style={{ minHeight: "100vh", backgroundColor: "#1F2937" }}
      >
        {activePage === "profile" && <CompanyProfile />}
        {activePage === "ipo-form" && <IpoForm />}
        {activePage === "ipo-status" && <ViewIPOStatus />}
        {activePage === "view-Articles" && <CompanyArticleList/>}
        {activePage === "add-Articles" && <CompanyAddArticle rediectToviewArticle={rediectToviewArticle}/>}
        {activePage === "companyAddComplaint" && <CompanyAddComplaint/>}
        {activePage === "users" && <CompanyViewUser/>}

      </div>
    </div>
  );
};
