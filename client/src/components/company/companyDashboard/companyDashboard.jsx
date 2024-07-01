import { useState } from "react";
import { CompanySidebar } from "../companySidebar/companySidebar";
import { IpoForm } from "../Ipoform/ipoForm";
import { ViewIPOStatus } from "../viewIPOStatus/viewIPOStatus";
import { CompanyProfile } from "../companyProfile/companyProfile";

export const CompanyDashboard = () => {
  const [activePage, setActivePage] = useState("profile");
  const changePage = (value) => {
    setActivePage(value);
  };
  return (
    <div className="d-flex bg-danger" style={{ height: "100vh" }}>
      <CompanySidebar changePage={changePage} />
      <div
        className=" w-100"
        style={{ minHeight: "100vh", backgroundColor: "#1F2937" }}
      >
        {activePage === "profile" && <CompanyProfile />}
        {activePage === "ipo-form" && <IpoForm />}
        {activePage === "ipo-status" && <ViewIPOStatus />}
      </div>
    </div>
  );
};
