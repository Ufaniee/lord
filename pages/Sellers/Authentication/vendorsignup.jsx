/** @format */

import Layout from "../../../components/global/Layout";
import React, { useState } from "react";
import LockIcon from "../../../public/assets/Lock.svg";
import UserIcon from "../../../public/assets/User1.svg";
import Image from "next/image";
import Link from "next/link";

const VendorSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Event handler for first name input change
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Event handler for last name input change
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Layout>
      <div
      className="py-8"
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
            Create Your Selling Account
          </h2>
          {/* First Name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="firstName">First Name</label>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "8px",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <input
                required
                type="text"
                id="firstName"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
          </div>

          {/* last name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="lastName">Last Name</label>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "8px",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <input
                required
                type="text"
                id="lastName"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>

          
          {/* Business name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="lastName">Business Name</label>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "8px",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <input
                required
                type="text"
                id="businessname"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Business Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>

          {/* Business Address */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <label htmlFor="lastName">Business Address</label>
            <div
              style={{
                display: "flex",
                border: "1px solid gray",
                borderRadius: "8px",
                alignItems: "center",
                padding: "0.5rem",
              }}
            >
              <input
                required
                type="text"
                id="businessaddress"
                style={{
                  border: "none",
                  outline: "none",
                  flex: "1",
                }}
                placeholder="Business Address"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>

          {/* Business email */}
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

          {/* Create Password */}
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

          {/* Confirm Password */}
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

          <center>
            <div
              style={{
                paddingTop: "40px",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "40px",
              }}
            >
              <Link href="/Sellers/Authentication/vendorlogin">
                <p>
                  Already have an account?{" "}
                  <span style={{ fontWeight: "bold", color: "#FCC313" }}>
                    Login
                  </span>
                </p>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </Layout>
  );
};

export default VendorSignUp;
