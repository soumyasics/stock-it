// import { useState } from "react";
// import AdminNavbar from "../../../components/common/adminNavbar";
// import AdminSidebar from "../../../components/common/adminSidebar";
// import { Footer2 } from "../../../components/common/footer2/footer2";
// import { AdminComapnyRequest } from "../adminCompanyRequest/adminCompanyRequest";
// import {CompanyPendingRequest} from "../../../components/company/CompanyRequest";
// import { OverviewPage } from "../adminOverview/adminOverview";

// export const AdminContainer = () => {
//   const [selectedPage, setSelectedPage] = useState("overview");
//   const changePage = (value) => {
//     setSelectedPage(value);
//   };
//   return (
//     <div>
//       <AdminNavbar />
//       <div className="d-flex" style={{ minHeight: "600px" }}>
//         <AdminSidebar changePage={changePage} />

//         <div>{selectedPage === "company-request" && <CompanyPendingRequest />}</div>
//         <div>{selectedPage === "overview" && <OverviewPage />}</div>
//       </div>
//     </div>
//   );
// };
