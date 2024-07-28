import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosMultipartInstance from "../../../apis/axiosMultipartInstance";

function CompanyAddArticle({rediectToviewArticle}) {
  const navigate = useNavigate();
  const [coArticle, SetCoArticle] = useState({
    title: "",
    subTitle: "",
    content: "",
    category: "",
    coId: "",
    thumbnail: null,
    video: null,
    conclusion: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    SetCoArticle({ ...coArticle, [name]: value });
  };
  useEffect(() => {
    const coId =
      JSON.parse(localStorage.getItem("stock_it_companyId")) || null;
    if (coId) {
      SetCoArticle((prev) => ({
        ...prev,
        coId: coId,
      }));
    } else {
      navigate("/companyLogin");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data", coArticle);
    const {
      title,
      subTitle,
      content,
      category,
      coId,
      thumbnail,
      video,
      conclusion,
    } = coArticle;
    const valitadeFields = () => {
      if (!title) {
        toast.error("Enter Title");
        return false;
      }
      if (!subTitle) {
        toast.error("Enter Subtitle");
        return false;
      }
      if (!content) {
        toast.error("Enter content");
        return false;
      }
      if (!category) {
        toast.error("Select category");
        return false;
      }
      if (!thumbnail) {
        toast.error("Please upload thumbnail");
        return false;
      }
      if (!video) {
        toast.error("Please upload video");
        return false;
      }
      if (!conclusion) {
        toast.error("Enter conclusion");
        return false;
      }
      return true;
    };
    if (!valitadeFields()) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("coId", coId);
    formData.append("subTitle", subTitle);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("conclusion", conclusion);
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);

    console.log("formdata", formData);
    sendDataToServer(formData)
  };
  const sendDataToServer=async (data)=>{
    try {
      const response=await axiosMultipartInstance.post("co-createArticle",data)
      console.log("res",response);
      if(response.status===201){
        toast.success("Article is uploaded")
        rediectToviewArticle()
      }else{
        toast.error(response.data.msg)
      }
    } catch (error) {
      console.log("Network issue",error)
      
    }
  }

  return (
    <div>
      <div className="etAddArticle">
        <div className="etBackBtn ps-4">
          <div className="etAddArticle-head ms-1 text-center">Article</div>
        </div>
        <form onSubmit={handleSubmit} className="etAddArticle-inputs">
          <div className="row">
            <div className="col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Article Title"
                name="title"
                value={coArticle.title}
                onChange={handleChanges}
              />
            </div>
            <div className="col">
              <label htmlFor="Episode Title">Subtitle </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Article subtitle"
                name="subTitle"
                value={coArticle.subTitle}
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <label htmlFor="title">Content</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Article Content "
                name="content"
                value={coArticle.content}
                onChange={handleChanges}
              />
            </div>
            <div className="col ">
              <label htmlFor="">Category</label>
              <select
                className="form-select-sm "
                style={{
                  width: "80%",
                  height: "30px",
                  marginLeft: "10%",
                  borderRadius: "14px",
                }}
                aria-label="Default select example"
                name="category"
                value={coArticle.category}
                onChange={handleChanges}
              >
                <option value="">Open this select menu</option>
                <option value="Education">Education</option>
                <option value="Company Updates">Company Updates</option>
                <option value="Company News">Company News</option>
                <option value="Upcoming IPOs">Upcoming IPOs</option>
                <option value="Stock Analysis">Stock Analysis</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col">
              <div className="mb-3">
                <label for="formFileSm" className="form-label">
                  Thumbnail
                </label>
                <input
                  className="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={(e) => {
                    SetCoArticle({
                      ...coArticle,
                      thumbnail: e.target.files[0],
                    });
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label for="formFileSm" className="form-label">
                  Video
                </label>
                <input
                  className="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={(e) => {
                    SetCoArticle({ ...coArticle, video: e.target.files[0] });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="etAddArticle-textarea pt-2">
            Conclusion
            <br />
            <input
              type="textarea"
              placeholder="Enter conclusion"
              name="conclusion"
              value={coArticle.conclusion}
              onChange={handleChanges}
            />
          </div>
          <div className="etAddArticle-btn">
            <button type="submit" value="submit">
              Add Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyAddArticle;
