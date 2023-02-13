import React from "react";
import styles from "./Adduser.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    group: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const addUser = (e) => {
    if (
      newUser.fullname.trim().length === 0 ||
      newUser.email.trim().length === 0 ||
      newUser.group.trim().length === 0
    ) {
      e.preventDefault();
    } else {
      // console.log(newUser);
      axios.post("http://localhost:3001/users", newUser);
      alert("User Added Successfully");
      navigate("/Users")
    }
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContainer}>
        <div className={styles.closeX} onClick={() => navigate("/Users")}>
          X
        </div>
        <div className={styles.title}>
          <h2>Add User</h2>
        </div>
        <div className={styles.body}>
          <label htmlFor="fullname">Full Name</label>
          <input
            name="fullname"
            onChange={handleChange}
            type="text"
            placeholder="Enter your Full Name"
          />
          <label htmlFor="fullname">Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter your Email Address"
          />
          <label htmlFor="fullname">Group</label>
          <input
            name="group"
            onChange={handleChange}
            type="text"
            placeholder="Enter your Group"
          />
        </div>
        <div className={styles.footer}>
          <button
            className={styles.cancelBtn}
            onClick={() => navigate("/Users")}
          >
            Cancel
          </button>
          <button onClick={addUser} className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
