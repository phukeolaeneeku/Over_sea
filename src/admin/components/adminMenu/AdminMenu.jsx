import "./adminMenu.css";
import {
  IoDocumentText,
  IoLogOutOutline,
} from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import Logo1 from "../../../img/Logo1.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../../img/user.png";

const AdminMenu = () => {

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <NavLink to="/dashboard" className="link">
              <RxDashboard />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/product-admin" className="link">
              <IoDocumentText />
              <p>Products</p>
            </NavLink>
            <NavLink to="/order-admin" className="link">
              <MdOutlineSell />
              <p>Orders</p>
            </NavLink>
            <NavLink to="/store-admin" className="link">
              <HiOutlineBuildingStorefront />
              <p>Stores</p>
            </NavLink>
            <NavLink to="/users" className="link">
              <BiUser />
              <p>Users</p>
            </NavLink>
            <NavLink to="/admins" className="link">
              <LiaUserCogSolid />
              <p>Admins</p>
            </NavLink>
            <div className="link">
              <IoLogOutOutline />
              <p>Log Out</p>
            </div>
          </div>
          <div className="right">
            <div>
              <NavLink to="/dashboard" className="logo">
                <span>
                  <img src={Logo1} alt="" />
                </span>
              </NavLink>
            </div>
            <div className="boximage_admin">
              <NavLink to="/account-admin" className="userAdminImage">
                <p>Name admin</p>
                <img
                  src={user}
                  alt="admin profile"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
