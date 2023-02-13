import React, { useState } from "react";
import styles from "./Adduser.module.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edituser = () => {
  const { userId } = useParams();
  const [editUsers, setEditUsers] = useState({
    fullname: "",
    email: "",
    group: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditUsers({
      ...editUsers,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const editUser = (ie) => {
    axios.put(`http://localhost:3001/users/${userId}`, editUsers);
    navigate("/Users");
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContainer}>
        <div className={styles.closeX} onClick={() => navigate("/Users")}>
          X
        </div>
        <div className={styles.title}>
          <h2>Edit User</h2>
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
          <button onClick={editUser} className={styles.saveBtn}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
