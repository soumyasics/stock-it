import { FaUser } from "react-icons/fa";
export const OverviewPage = () => {
  return (
    <div
      className="overview-page bg-danger"
      style={{ position: "relative", right: "50px", height: "500px", width: "500px" }}
    >
      <div>
        <FaUser />
      </div>
      <div>
        <h5>Users</h5>
        <h5>9693</h5>
      </div>
    </div>
  );
};
