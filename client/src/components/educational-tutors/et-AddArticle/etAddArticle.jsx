import React, { useState } from "react";
import "./etAddArticle.css";
import { TiArrowBackOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import axiosMultipartInstance from "../../../apis/axiosMultipartInstance";

function EtAddArticle() {
  const [article, setArticle] = useState({
    title: "",
    subTitle: "",
    content: "",
    category: "",
    thumbnail: null,
    video: null,
    conclusion: "",
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", article);
    const { title, subTitle, content, category, thumbnail, video, conclusion } =
      article;

    const valitadeFields = () => {
      
      if (!title) {
        toast.error("Enter title");
        return false;
      }
      if (!subTitle) {
        toast.error("Enter subtilte");
        return false;
      }
      if(!content){
        toast.error("Enter content")
        return false
      }
      if(!category){
        toast.error("Select category")
        return false
      }
      if(!thumbnail){
        toast.error("Please upload thumbnail")
        return false
      }
      if(!video){
        toast.error("Please upload video")
        return false
      }
      if(!conclusion){
        toast.error("Enter conclusion")
        return false
      }
      return true;
      
    };
    if (!valitadeFields()) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);
    formData.append("conclusion", conclusion);

    console.log("formdata", formData);
   sendDataToServer(formData)
  };
  const sendDataToServer=async (data)=>{
    try{
      const response=await axiosMultipartInstance.post("/createArticle",data)
      console.log(response);
    if(response.status==200){
      toast.success("Article upload successful")
    }else{
      toast.error(response.data.msg)
    }
    }catch(error){
      console.error("network issue")
    }
  }

  return (
    <div>
      <div className="etAddArticle">
        <div className="etBackBtn">
          <TiArrowBackOutline />
          <div className="etAddArticle-head ms-1">Article</div>
        </div>
        <form onSubmit={handleSubmit} className="etAddArticle-inputs">
          <div className="row">
            <div className="col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article Title"
                name="title"
                value={article.title}
                onChange={handleChanges}
              />
            </div>
            <div class="col">
              <label htmlFor="Episode Title">Subtitle </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article subtitle"
                name="subTitle"
                value={article.subTitle}
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <label htmlFor="title">Content</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article Content "
                name="content"
                value={article.content}
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
                value={article.category}
                onChange={handleChanges}
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col">
              <div class="mb-3">
                <label for="formFileSm" class="form-label">
                  Thumbnail
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="thumbnail"
                  onChange={(e) => {
                    setArticle({ ...article, thumbnail: e.target.files[0] });
                  }}
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="formFileSm" class="form-label">
                  Video
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  name="video"
                  onChange={(e) => {
                    setArticle({ ...article, video: e.target.files[0] });
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
              value={article.conclusion}
              onChange={handleChanges}
            />
          </div>
          <div className="etAddArticle-btn">
            <button type="submit" value="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EtAddArticle;
