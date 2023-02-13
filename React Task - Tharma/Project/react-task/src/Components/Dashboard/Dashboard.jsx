import React from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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
            className={styles.dashboardRoute}
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Dashboard
          </div>
          <div>Pages</div>
          <div>Categories</div>
          <div
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
        <div className={styles.dashboard}>Dashboard</div>
        <div>Pages</div>
        <hr />
        <div>Categories</div>
        <hr />
        <div onClick={() => {
              navigate("/Users");
            }}>User Accounts</div>
      </div>
      <div className={styles.rightDiv}>
        <h1>Dashboard</h1>
        <hr />
        <div className={styles.rightTopDiv}>
          <h2>Latest Pages</h2>
          <hr />
          <div className={styles.pageTitle1}>
            <div>Page Title</div>
            <div>Category</div>
            <div>Author</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page One</div>
            <div>Category One</div>
            <div>John Wick</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Two</div>
            <div>Category Two</div>
            <div>Vicky Nash</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Three</div>
            <div>Category Three</div>
            <div>Jenni Lora</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Four</div>
            <div>Category Four</div>
            <div>Haley Maya</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Five</div>
            <div>Category Five</div>
            <div>Austen Paige</div>
          </div>
          <button className={styles.viewPagesBtn}>View All Pages</button>
        </div>
        <div className={styles.rightBottomDiv}>
          <h2>Latest Users</h2>
          <hr />
          <div className={styles.pageTitle1}>
            <div>Page Title</div>
            <div>Category</div>
            <div>Author</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page One</div>
            <div>Category One</div>
            <div>John Wick</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Two</div>
            <div>Category Two</div>
            <div>Vicky Nash</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Three</div>
            <div>Category Three</div>
            <div>Jenni Lora</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Four</div>
            <div>Category Four</div>
            <div>Haley Maya</div>
          </div>
          <hr />
          <div className={styles.pageTitle}>
            <div className={styles.blueHeader}>Sample Page Five</div>
            <div>Category Five</div>
            <div>Austen Paige</div>
          </div>
          <button className={styles.viewPagesBtn}>View All Pages</button>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Copyright 2017, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Dashboard;
