import React from "react";
import "./setting.css";
import ram from "../../assets/ramkrisna.webp";
import {Link} from "react-router-dom"

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingTitle">
        <span className="updateTitle">Update your account</span>
        <Link style={{textDecoration:"none"}} to={'/register'}><spna className="createTitle">Create a account</spna></Link>
      </div>
      <form className="settingForm">
        <div className="formItem">
          <span className="imgU">Update your img :</span>
          <label htmlFor="img">
            {" "}
            <img src={ram} alt="" className="settingImg" />
          </label>
          <input type="file" id="img" hidden />
        </div>
        <div className="formItem">
          <label htmlFor="username"> Update your username :</label>
          <input type="text" id="username" />
        </div>
        <div className="formItem">
          <label htmlFor="email"> Update your email:</label>
          <input type="email" id="email" />
        </div>
        <div className="formItem">
          <label htmlFor="password"> Update your password:</label>
          <input type="password" id="password" />
        </div>
        <h1><button className="submit">Update</button></h1>
      </form>
    </div>
  );
};

export default Setting;
