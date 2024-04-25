import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://groomtest.onrender.com/growCool/admin/login",
        formValue
      );

      if (response.data.status) {
        localStorage.setItem("auth_token", response.data.data.auth_token);
        localStorage.setItem("username", response.data.data.username);
        navigate("/admin");
        alert("username", response.data.data.username);
      } else {
        setError(response.data.message);
        //alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
      //alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="main signin-signup">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img
                  src="assets/img//signin-image.jpg"
                  alt="sing up image"
                />
              </figure>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handleSubmit} className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="username">
                    <FaUser />
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your Name"
                    value={formValue.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <RiLockPasswordFill />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
                {error && <p className="error-message mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
