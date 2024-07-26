import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import { TiArrowBack } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const IpoStatusEditModal = ({ closeModal, modalIsOpen }) => {
//   const [complaint, setComplaint] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Complaint submitted:", complaint);
//     // Add your submission logic here
//     setComplaint("");
//     closeModal();
//   };
const [totalShares, setTotalNoShares] = useState("");
  const [costPerShare, setCostPerShare] = useState("");
  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [companyId, setCompanyId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;
    if (companyId) {
      companyId = companyId.replace(/['"]+/g, "");
      setCompanyId(companyId);
    } else {
      toast.error("Please login again.");
      navigate("/companyLogin");
    }
  }, []);
  useEffect(() => {
    const cap = totalShares * costPerShare;
    if (isNaN(cap)) {
      setTotalMarketCap("");
      return;
    }
    setTotalMarketCap(cap);
  }, [totalShares, costPerShare]);

  const handleTotalNoSharesChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setTotalNoShares("");
    } else {
      const numValue = parseInt(value);
      if (numValue >= 0) {
        setTotalNoShares(numValue);
      }
    }
  };

  const handleCostPerShareChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCostPerShare("");
    } else {
      const numValue = parseFloat(value);
      if (numValue >= 0) {
        setCostPerShare(numValue);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!totalShares || totalShares === 0) {
      toast.error("Total number of shares cannot be 0");
      return;
    }

    if (!costPerShare || costPerShare === 0) {
      toast.error("Cost per share cannot be 0");
      return;
    }
    if (totalMarketCap === 0) {
      toast.error("Total Market Cap cannot be 0");
      return;
    }

    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }

    const ipoData = {
      totalShares,
      costPerShare: costPerShare,
      companyId: companyId,
      capitation: totalMarketCap,
    };
    sendDataToServer(ipoData);
  };
  useEffect(() => {
    let companyId = localStorage.getItem("stock_it_companyId") || null;

    if (!companyId) {
      toast.error("Please login again.");
      navigate("/companyLogin");
      return;
    }
    companyId = companyId.replace(/['"]+/g, "");
    getIpoData(companyId);
  }, []);

  const getIpoData = async (companyId) => {
    try {
      const response = await axiosInstance.get(
        `/getIpoByCompanyId/${companyId}`
      );
      console.log("resp", response);
      const data = response?.data?.data || null;
      if (data) {
        setIpoStatus(data);
      } else {
        console.log("resposne", response);
      }
      console.log("Response from getIpoStatus api", response.data.data);
    } catch (error) {
      console.log("Error getting compnaies ipo data", error);
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Complaint Modal"
        className="ipoStatusEdit"
        overlayClassName="overlay"
      >
        <div className="d-flex"></div>
        <Form onSubmit={handleSubmit}>
          <div className="companystock">
            <span
              onClick={closeModal}
              style={{ color: "#fff", fontSize: "25px", marginLeft: "8%" }}
            >
              {" "}
              <TiArrowBack />
            </span>
            <div className="companystock-head">
              <h3>Edit Company Stock Details</h3>
            </div>
            <form className="companystock-inputs" onSubmit={handleSubmit}>
              <label htmlFor="Totalshares">
                Total Shares <span className="companystock-star">*</span>
              </label>
              <br />
              <input
                type="number"
                value={totalShares}
                className="ps-3"
                onChange={handleTotalNoSharesChange}
                placeholder="Total Shares"
                min="0"
                max="1000000000"
              />
              <label htmlFor="CostPerShares">
                Cost Per Share <span className="companystock-star">*</span>
              </label>
              <br />
              <input
                className="ps-3"
                type="number"
                placeholder="Cost Per Share"
                value={costPerShare}
                onChange={handleCostPerShareChange}
                min="0"
                max="1000000000"
              />
              <label htmlFor="TotalMarketCap">
                Total Market Capitalization{" "}
                <span className="companystock-star">*</span>
              </label>
              <br />
              <input
                type="text"
                className="ps-3"
                placeholder="Total Market Capitalization"
                value={totalMarketCap}
                readOnly
              />
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          {/* <div className="editsubmit-button">
            <Button variant="secondary">Update</Button>{" "}
          </div> */}
        </Form>
      </Modal>
    </div>
  );
};

export default IpoStatusEditModal;
