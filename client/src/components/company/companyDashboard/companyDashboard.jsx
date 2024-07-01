import { useState } from "react";
import { CompanySidebar } from "../companySidebar/companySidebar";
import { IpoForm } from "../Ipoform/ipoForm";
import { ViewIPOStatus } from "../viewIPOStatus/viewIPOStatus";

export const CompanyDashboard = () => {
  const [activePage, setActivePage] = useState("ipo-status");
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
        {activePage === "ipo" && <IpoForm />}
        {activePage === "ipo-status" && <ViewIPOStatus />}
      </div>
    </div>
  );
};
