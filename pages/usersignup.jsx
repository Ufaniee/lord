/** @format */

import Layout from "../components/global/Layout";
import React, { useState } from "react";
import LockIcon from "../public/assets/Lock.svg";
import UserIcon from "../public/assets/User1.svg";
import Image from "next/image";
import Link from "next/link";

const UserSignUp = () => {
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
            Create Your Shopping Account
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1.5rem",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1.5rem",
            }}
          >
            <label htmlFor="password">Password</label>
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
                src={LockIcon}
                alt="Lock Icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              <input
                required
                type="password"
                id="password"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1.5rem",
            }}
          >
            <label htmlFor="password">Confirm Password</label>
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
                src={LockIcon}
                alt="Lock Icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              <input
                required
                type="password"
                id="password"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "80px",
                fontSize: 11,
              }}
            >
              <input
                
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

           
          </div> */}
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
            Register
          </button>
          <div style={{ marginTop: "1rem" }}>
            <button
              style={{
                background: "red",
                color: "white",
                fontWeight: "bold",
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              Sign Up with Google
            </button>
          </div>
          <center>
            <div
              style={{
                paddingTop: "40px",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "40px",
              }}
            >
              <Link href="/userlogin">
                <p>
                  Don't have an account?{" "}
                  <span style={{ fontWeight: "bold", color: "#FCC313" }}>
                    Login
                  </span>{" "}
                </p>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </Layout>
  );
};

export default UserSignUp;
