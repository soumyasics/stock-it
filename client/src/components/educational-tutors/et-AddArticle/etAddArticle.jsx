import React from "react";
import "./etAddArticle.css";
import { TiArrowBackOutline } from "react-icons/ti";

function EtAddArticle() {
  return (
    <div>
      <div className="etAddArticle">
        <div className="etBackBtn">
          <TiArrowBackOutline />
        </div>
        <div className="etAddArticle-inputs">
          <div className="row">
            <div className="col">
              <label htmlFor="title">Article Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article Title"
              />
            </div>
            <div class="col">
              <label htmlFor="Episode Title">Article subtitle </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article subtitle"
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <label htmlFor="title">Article Content</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Article Content "
              />
            </div>
            <div className="col ">
               <label htmlFor="">Article Category</label>
              <select className="form-select-sm "style={{width:"80%" ,height:"30px",marginLeft:"10%",borderRadius:"14px"}} aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="etAddArticle-textarea pt-3">
            Conslusion
            <br />
            <input type="textarea" />
          </div>
          <div className="etAddArticle-btn">
            <button type="submit">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EtAddArticle;
