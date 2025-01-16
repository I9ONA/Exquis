import React, { useState, useContext } from "react";
import "../CSS/Sign.css";
import { Parfumcontext } from "../context/Parfumcontext";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sign({ setFsign3 }) {
  const { Sign, setSign, setIsAdmin} = useContext(Parfumcontext);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signData, setSignData] = useState(Sign);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const [usernamecheck, setUsernamecheck] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { username, email, password, role };

    const updatedSignData = {
      ...signData,
      user: [...signData.user, newUser],
    };

    setSign(updatedSignData);
    setSignData(updatedSignData); 

    window.alert(`Sign up successful! Welcome, ${role}`);
    setIsSignUpMode(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("User"); 
    setIsAdmin(false);
    navigate("/");
    setFsign3(false);
  };

  
  const handleSignIn = (e) => {
    e.preventDefault();

    
    const adminUser = signData.admin.find(
      (user) => user.username === usernamecheck && user.password === passwordcheck
    );
    const regularUser = signData.user.find(
      (user) => user.username === usernamecheck && user.password === passwordcheck
    );

    if (adminUser) {
      window.alert(`Welcome back ${adminUser.username} (Admin)!`);
      setUsernamecheck("");
      setPasswordcheck("");
      setIsAdmin(true); 
      navigate("/");
      setFsign3(false);
    } else if (regularUser) {
      window.alert(`Welcome back ${regularUser.username} (User)!`);
      setUsernamecheck("");
      setPasswordcheck("");
      setIsAdmin(false); 
      navigate("/");
      setFsign3(false);
    } else {
      window.alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleSignIn}>
            <h2 className="title-sign">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={usernamecheck}
                onChange={(e) => setUsernamecheck(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={passwordcheck}
                onChange={(e) => setPasswordcheck(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>

          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title-sign">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
           
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>Sign up</button>
          </div>
          <img src="Signimages/log.svg" className="image" alt="Log" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>Sign in</button>
          </div>
          <img src="Signimages/register.svg" className="image" alt="Register" />
        </div>
      </div>
    </div>
  );
}

export default Sign;