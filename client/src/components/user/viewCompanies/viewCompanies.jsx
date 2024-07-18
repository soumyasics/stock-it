import { useEffect, useState } from "react";
import "./viewCompanies.css";
import { useNavigate } from "react-router-dom";
import { UserNavbar } from "../userNavbar/userNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import axiosInstance from "../../../apis/axiosInstance";
import { Button } from "react-bootstrap";
import ComplaintModal from "../UserComplaintModal/userComplaintModal";
import toast from "react-hot-toast";

export const UserViewCompanies = () => {
  const navigate = useNavigate();
  const [allCompanies, setAllCompanies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState({});
  const [companyId, setCompanyId] = useState({});
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const addComplaintFn = (companyId) => {
    setCompanyId(companyId)
    openModal();
  };

  const getAllCompanies = async () => {
    try {
      const res = await axiosInstance.post("viewCompanies");
      if (res.status === 200) {
        const data = res.data?.data || [];
        setAllCompanies(data);
      } else {
        console.log("Error ", res);
      }
    } catch (error) {
      console.log("Error getting compnaies", error);
    }
  };
  useEffect(() => {
    const userId = localStorage.getItem("stock_it_userId") || null;
    if (userId) {
      setUserId(userId);
    }
  }, []);
  const sendComplaint = (complaint) => {
    try {
      console.log("CoId",companyId);
      console.log("user id",userId);
      console.log(complaint);
      toast.success("Complaint uploaded")
    } catch (error) {
      toast.error("network issue")
    }finally{
      closeModal()
    }
  };
  console.log("como", allCompanies);
  useEffect(() => {
    getAllCompanies();
  },[]);
  return (
    <div>
      <UserNavbar />

      <div className="viewCompany-body ">
        <div className="viewcomapany-head-box">
          <h4>Active companies list</h4>
        </div>

        <div className="comapnyRequest-first-box">
          <div className="companyRequesest-second-box" role="group"></div>
        </div>

        <div className="viewCompany-table ">
          <table border="1px">
            <tr className="viewCompancy-head-row">
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Contact</th>
              <th>State</th>
              <th>Email</th>
              <th>View More</th>
              <th>Complaint</th>
            </tr>
            {allCompanies.map((co, i) => {
              return (
                <tr key={co._id}>
                  <td>{i + 1}</td>
                  <td>{co.name}</td>
                  <td>{co.companyType}</td>
                  <td>{co.contact}</td>
                  <td>{co.state}</td>
                  <td>{co.email}</td>
                  <td className="viewComapny-viewmore">
                    <Button
                      onClick={() => {
                        navigate(`/companyDetails/${co._id}`);
                      }}
                    >
                      View more
                    </Button>
                  </td>
                  <td className="viewComapny-viewmore">
                    <Button
                      className=" btn-danger btn"
                      onClick={() => {
                        addComplaintFn(co._id);
                      }}
                    >
                      Add Complaint
                    </Button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <ComplaintModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        sendComplaint={sendComplaint}
        userId={userId}
        companyId={companyId}
      />
      <div>
        <Footer2 />
      </div>
    </div>
  );
};
