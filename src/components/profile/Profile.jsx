import React, { useEffect, useState } from "react";
import "./profile.css";
// import change from "assets/img/icon/change.svg";
import change from "../assets/img/icon/change.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import profile from "../../img/profile.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const [errorText, set_errorText] = useState("");
  const [user_data, set_user_data] = useState(null);
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSellerSignup = () => {
    navigate("/change-seller");
    return;
  };

  const handleConfirmSellerSignup = () => {
    handleSellerSignup();
    setShowConfirmation(false);
  };
  const handleCancelSellerSignup = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="ProfilePage">
        <div className="boxgoback">
          <Link to="/more" className="box_iconBack">
            <MdArrowBack id="iconBack" />
          </Link>
        </div>

        <div className="box_prof">
          {JSON.parse(window.localStorage.getItem("user")).image != false ? (
            <img
              src={JSON.parse(window.localStorage.getItem("user")).image}
              alt=""
            />
          ) : (
            <img src={profile} alt="" />
          )}

          {/* <p>
            Name: {JSON.parse(window.localStorage.getItem("user")).user_name}
          </p> */}
          {!storage.origin_store_name ? (
            <>
              <div id="user_name" className="user_name">
                {storage.nickname || storage.email}
              </div>
              <div id="user_name" className="user_name">
                <p>User</p>
              </div>
              <div id="user_name" className="user_name">
                <img
                  onClick={() => setShowConfirmation(true)}
                  className=""
                  src={change}
                  alt=""
                />
              </div>
            </>
          ) : (
            <div id="user_name" className="user_name">
              {user_data.origin_store_name}
            </div>
          )}
        </div>

        {showConfirmation && (
          <div className="confirmation-popup">
            <p>Would like to join with the seller?</p>
            <div className="btn_ok_on">
              <button onClick={handleCancelSellerSignup} className="btn_on">
                No
              </button>
              <button onClick={handleConfirmSellerSignup} className="btn_yes">
                Yes
              </button>
            </div>
          </div>
        )}

        <form className="container_form_profile">
          <input type="nickname" placeholder="change nick name" required />

          <button type="submit">Edit profile</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
