import React from "react";
import "./write.css";
import profileavater from "../../assets/avatarbanner.webp";

const Write = () => {
  return (
    <div className="write">
      <h1 className="wTitle">Write Your Blog...</h1>
      <form>
        <div>
          <label htmlFor="avatar">
            <img src={profileavater} alt="" className="WriteImg" />
          </label>
          <input type="file" id="avatar" hidden />
        </div>
        <div className="textTitle">
          <label className="titletext" htmlFor="title">
            Write your blog title :
          </label>
          <input type="text" id="title" className="titleInput" />
        </div>
        <textarea
          className="textarea"
          name=""
          placeholder="Tell your story..."
          rows={10}
          cols={100}
        ></textarea>
        <h1 className="button">
          <button type="submit">Submit</button>
        </h1>
      </form>
    </div>
  );
};

export default Write;
