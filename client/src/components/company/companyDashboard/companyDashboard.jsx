import { useState } from "react";
import { CompanySidebar } from "../companySidebar/companySidebar";
import { IpoForm } from "../Ipoform/ipoForm";

export const CompanyDashboard = () => {
  const [activePage, setActivePage] = useState("ipo");

  return (
    <div className="d-flex bg-danger" style={{ height: "100vh" }}>
      <CompanySidebar />
      <div
        className=" w-100"
        style={{ minHeight: "100vh", backgroundColor: "#1F2937" }}
      >
        {activePage === "ipo" && <IpoForm />}
      </div>
    </div>
  );
};
