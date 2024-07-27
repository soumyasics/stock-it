import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
export const TutorRating = ({ etId, getTutorById }) => {
  const [userId, setUserId] = useState();
  const [reviewData, setReviewData] = useState({
    rating: 0,
    review: "",
    userId: "",
    etId: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("stock_it_userId") || null;
    if (userId) {
      setUserId(userId);
    } else {
      toast.error("Please Login");
    }
    setReviewData({
      ...reviewData,
      userId,
      etId,
    });
  }, [userId, etId]);

  console.log("review ", reviewData);
  const changeReview = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const ratingChanged = (newRating) => {
    setReviewData({ ...reviewData, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewData.review !== "" && reviewData.rating !== 0) {
      console.log("review dat", reviewData);
      sendDataToServer();
    } else {
      toast.error("Please provide a review and rating");
    }
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("/addRating", reviewData);
      if (res.status === 200) {
        toast.success("Review added successfully");
        setReviewData({ ...reviewData, review: "", rating: 0 });
      } else {
        throw new Error("Couldn't add review");
      }
    } catch (error) {
      toast.error("Couldn't add review");
    } finally {
      getTutorById();
    }
  };
  return (
    <div>
      <div
        className="mt-3 mx-auto shadow p-3"
        style={{
          background: "#374151",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "200px",
        }}
      >
        <div>
          <h5 className="text-center text-light">Review your experience </h5>
        </div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
          value={reviewData.rating}
        />
        <form
          className="d-flex justify-content-center align-items-center mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            style={{ height: "33px", width: "75%" }}
            value={reviewData.review}
            id="review"
            name="review"
            onChange={changeReview}
            placeholder="Write a review"
            className="form-control"
          />
          <button type="submit" className="btn ms-5 btn-success ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
