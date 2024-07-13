import React from 'react'

function CompanyAddArticle() {
  return (
    <div>
         <div className="etAddArticle">
        <div className="etBackBtn">
        
          <div className="etAddArticle-head ms-1">Article</div>
        </div>
        <form  className="etAddArticle-inputs">
          <div className="row">
            <div className="col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Article Title"
                name="title"
                // value={article.title}
                // onChange={handleChanges}
              />
            </div>
            <div className="col">
              <label htmlFor="Episode Title">Subtitle </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Article subtitle"
                name="subTitle"
                // value={article.subTitle}
                // onChange={handleChanges}
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
                // value={article.content}
                // onChange={handleChanges}
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
                // value={article.category}
                // onChange={handleChanges}
              >
                <option selected>Open this select menu</option>
                <option value="Education">Education</option>
                <option value="Company Updates">Company Updates</option>
                <option value="Upcoming IPOs">Upcoming IPOs</option>
                <option value="Stock Analysis">Stock Analysis</option>
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
                //   onChange={(e) => {
                //     setArticle({ ...article, thumbnail: e.target.files[0] });
                //   }}
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
                //   onChange={(e) => {
                //     setArticle({ ...article, video: e.target.files[0] });
                //   }}
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
            //   value={article.conclusion}
            //   onChange={handleChanges}
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
  )
}

export default CompanyAddArticle