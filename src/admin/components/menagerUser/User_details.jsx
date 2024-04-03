import "./user_details.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

const User = () => {
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="goback">
          <Link to="/users" className="box_guopIconbAck">
            <FaAngleLeft id="box_icon_Back" />
            <p>Back</p>
          </Link>
        </div>
        <div className="box_addAdmin">
          <form>
            <div className="addAdminForm">
              <h3>User Details</h3>
              <div className="del-update">
                <div
                  className="del"
                >
                  <AiOutlineDelete />
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">User ID:</label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <div className="input">
                    <p>a</p>
                  </div>
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">User Name:</label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <div className="input">
                    <p>a</p>
                  </div>
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">Email:</label>
                <div className="boxiconnandinput">
                  <MdOutlineEmail className="iconinput" />
                  <div className="input">
                    <p>a</p>
                  </div>
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="phone" className="titlelabel">Phone number:</label>
                <div className="boxiconnandinput">
                  <FiPhone className="iconinput" />
                  <div className="input">
                    <p>a</p>
                  </div>
                </div>

              </div>
              <div className="add-box">
                <label htmlFor="adminImage" className="titlelabel">Profile image:</label>
                <div className="BorderinputThenImage">
                  <div className="input">
                    <img
                      src="#"
                      alt="admin profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

    </>
  );
};

export default User;
