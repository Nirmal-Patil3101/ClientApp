import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../ReduxWork/UserSlice";
import "../CSS/Profile.css";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log("DATA", userData);
 

  return (
    <div className="profile-container">
      <img src={`http://localhost:5000/${userData.cphoto}`}  />
      <p><strong>Name:</strong> {userData.cname}</p>
      <p><strong>Email:</strong> {userData.cemail}</p>
      <p><strong>Mobile No:</strong> {userData.cmobile}</p>
      <p><strong>Adders:</strong> {userData.cadders}</p>
      <p><strong>Gender:</strong> {userData.gender}</p>
      <p><strong>City:</strong> {userData.ccity}</p>
      <p><strong>State:</strong> {userData.cstate}</p>
      <p><strong>Pincode:</strong> {userData.cpincode}</p>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
