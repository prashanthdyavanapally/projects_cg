import React from "react";
import styles from "./Users.module.css";
import { useNavigate } from "react-router-dom";
import Adduser from "./Adduser";
import Edituser from "./Edituser";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const navigate = useNavigate();

  const [editPopup, setEditPopup] = useState(false);

  const [users, setUsers] = useState([]);

  const displayUsers = () => {
    axios.get("http://localhost:3001/users").then((res) => {
      const users = res.data;
      // console.log(users);
      setUsers(users);
    });
  };

  useEffect(() => {
    displayUsers();
  });

  const removeItem = async (userId) => {
    console.log(userId);
    await axios
      .delete(`http://localhost:3001/users/${userId}`, {
        method: "DELETE",
      })

      .then(function (response) {
        displayUsers();
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBarList}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={styles.navBarDCX}
          >
            DCX CMS
          </div>
          <div
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Dashboard
          </div>
          <div>Pages</div>
          <div>Categories</div>
          <div
            className={styles.usersRoute}
            onClick={() => {
              navigate("/Users");
            }}
          >
            Users
          </div>
          <input type="text" placeholder="Search..." />
          <button>Submit</button>
        </div>
        <div className={styles.navBarSearch}>
          <div className={styles.myAccount}>My Account</div>
          <div>Logout</div>
        </div>
      </div>
      <div className={styles.leftHeaders}>
        <div
          onClick={() => {
            navigate("/Dashboard");
          }}
        >
          Dashboard
        </div>
        <hr />
        <div>Pages</div>
        <hr />
        <div>Categories</div>
        <div className={styles.userAccounts}>User Accounts</div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.newEdit}>
          <h1>Users</h1>
          <div>
            <button onClick={() => navigate("/Adduser")}>New</button>
          </div>
        </div>
        <hr />
        <div className={styles.rightTopDiv}>
          <p>
            Dashboard <span>/ Users</span>
          </p>
          <div className={styles.pageTitle1}>
            <input type="checkbox" id="check" name="check" value="fullname" />
            <div>Full Name</div>
            <div>Email</div>
            <div>Group</div>
          </div>
          <hr />
          {users.map((e, id) => (
            <div key={e.id}>
              <div className={styles.pageTitle}>
                <input
                  type="checkbox"
                  id="check"
                  name="check"
                  value="fullname"
                />
                <div className={styles.blueHeader}>{e.fullname}</div>
                <div>{e.email}</div>
                <div>{e.group}</div>
                <button onClick={() => navigate("/Edituser")}>Edit</button>
                <button onClick={()=>removeItem(e.id)}>Delete</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
