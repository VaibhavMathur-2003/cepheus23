// import React from "react";
import React, { Component, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Navbar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
axios.defaults.withCredentials = true;

const link_initial = "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v16736772"

export default function Navbar({
  handleProfileClick,
  successor,
  auth_start,
  auth_failure,
  setUserdata,
  userdata,
  isMenuClicked,
  setMenuClicked,
  setUserRegistered,
  success, reg_failed, error,
  setislogin,
  success_login,
  error_general,
  setTeamInfoPage,
  setEditProfile,
  isUserRegistered, 
  setShowQr
}) {
  const clientId = "218396342180-14tf81vkmg8a2iu06831pp8prl1k1669.apps.googleusercontent.com";


  useEffect(() => {
    const initClient = () => {
        gapi.client.init({
            clientId: clientId,
            scope: 'email profile openid'
        });
    };
    gapi.load('client:auth2', initClient);
});
  const responseGoogle = (response) => {
    setUserdata((userdata) => ({
      ...userdata,
      name: response.profileObj.name,
      firstName: response.profileObj.givenName,
      email: response.profileObj.email,
      tokenId: response.tokenId
    }));
    auth_start();
    setislogin(true);
    axios.post("https://backendcepheus.cf/apiM2/login",
    {idToken: response.tokenId},
    {withCredentials: true})
    .then((res) => {
      success_login();
      console.log(res);
      if(!res.data.registered){
        setUserRegistered(false);
      } else {
        setUserdata((userdata) => ({
          ...userdata,
          id: res.data.id,
          name: res.data.user_name,
          college: res.data.college,
          grade: res.data.grade,
          mobile: res.data.mobile,
          imgurl: link_initial + res.data.image_url
        }));
        axios.post("https://backendcepheus.cf/apiM2/getreg",
          {},
          {withCredentials: true})
          .then((res) => {
            setUserdata((userdata) => ({
              ...userdata,
              regevents: res.data.regevents
            }))
          })
          .catch((err) => {
            console.log(err);
            error_general();
          })
      }
    })
    .catch((err) => {
      console.log(err);
      error_general();
    })
    // handleLogin();
    // setsuccess(true);
  };
  const responseGoogle1 = (response) => {
    console.log(response);
    if(response.details){
      error(response.details + " Please enable the cookies and try again.");
    } else {
      error_general();
    }
    auth_failure();
    // setsuccess(false);
  };
  return (
    <div className="navbar" onClick={() => setShowQr(false)}>
      <div class="navbar-logo">
        <img src="img/cepheus_logo.jfif" alt=""></img>
        <h2>CEPHEUS</h2>
        <p>'23</p>
      </div>
      <div className="menu-button">
        <i class="fa-solid fa-bars" onClick={() => setMenuClicked(!isMenuClicked)}></i>
      </div>
      <div className={isMenuClicked ? "active navbar-items" : "navbar-items"}>
        <i class="fa-solid fa-xmark" onClick={() => setMenuClicked(false)}></i>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Events">Events</a>
        <a href="#Schedule">Schedule</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#Contact">Contact</a>
        <div style={successor ? { display: "none" } : { display: "inline-flex" }}>
          <GoogleLogin
            render={(renderProps) => (
              <a
                href="#"
                className="login-signup-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login/SignUp
              </a>
            )}
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle1}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
        <div style={success?{display:'block'}:{display:'none'}}>
        <img
          style={successor ? { display: "block" } : { display: "none" }}
          src={userdata.imgurl.substr(userdata.imgurl.length-4, userdata.imgurl.length-1)==="null"? "img/user_placeholder.png" : userdata.imgurl}
          alt="avatar"
          onClick={() => {
            if(isUserRegistered){
              handleProfileClick();
            }
            setMenuClicked(!isMenuClicked);
            setEditProfile(false);
            setTeamInfoPage(false);
          }}
        ></img>
        </div>
      </div>
      <div className="toast-container-div">
      <ToastContainer 
    className="toastbar"
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={true}
/>
</div>
    </div>
  );
}
