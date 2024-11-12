import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../ReduxWork/UserSlice";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log("DATA", userData);
  return (
    <div>
      <p>Name:{userData.cname}</p>
      <p>Email:{userData.cemail}</p>
      <p>Mobile No:{userData.cmobile}</p>
      <p>Adders:{userData.cadders}</p>
      <p>Gender:{userData.gender}</p>
      <p>City:{userData.ccity}</p>
      <p>State:{userData.cstate}</p>
      <p>Pincode:{userData.cpincode}</p>
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
