/** @format */

import Layout from "../../components/global/Layout";
import React, { useState } from "react";
import LockIcon from "../../public/assets/Lock.svg";
import UserIcon from "../../public/assets/User1.svg";
import Image from "next/image";
import Link from "next/link";

const UserFotgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <form
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 0px 100px rgba(0, 0, 0, 0.2)",
            width: "100%",
            maxWidth: "500px", // Adjust the max width as per your requirement
            margin: "0 auto",
          }}
          onSubmit={handleSubmit}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Forgot Password
          </h2>
          <p style={{paddingBottom: "20px", color: "gray" }}>We are going to send you a password reset link to your email</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="email">Email</label>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "8px",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <Image
                src={UserIcon}
                alt="User Icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              <input
                required
                type="email"
                id="email"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          
          <button
            type="submit"
            style={{
              background: "#FCC313",
              color: "white",
              fontWeight: "bold",
              padding: "0.75rem",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            Send Email
          </button>
          
          <center>
            <div
              style={{
                paddingTop: "40px",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "40px",
              }}
            >
              {/* <Link href="/usersignup">
                <p>
                  Do not have an account?
                  <span style={{ fontWeight: "bold", color: "#FCC313" }}>
                    Create Account
                  </span>
                </p>
              </Link> */}
            </div>
          </center>
        </form>
      </div>
    </Layout>
  );
};

export default UserFotgotPassword;
