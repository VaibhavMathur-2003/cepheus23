import React, { Component, useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./Profile.css";
import { gapi } from "gapi-script";
import axios from "axios";
axios.defaults.withCredentials = true;

const event_names = [
  "Lorem Ipsum",
  "HackOverFlow",
  "Circuital Dilemma",
  "Data Science Hackathon",
  "HackTheGames",
  "CTF",
  "FizzBuzz",
  "Online Treasure Hunt",
  "Bridge Building Comeptition",
  "Copy the Nature",
  "Rule The Market",
  "Launch Galaset",
  "KBC Quiz Competition",
  "Maze Amaze",
  "Scratch",
  "Treasure Hunt",
  "Buy My Code",
  "Pare It Down",
  "Game Theory",
  "Arduino Workshop",
  "EV Bike Competition",
  "Line Maze Fun Game",
  "Dive the Boat",
];

const link_initial =
  "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v16736772";

export default function Profile({
  isProfileClicked,
  auth_reset,
  auth_continue,
  userdata,
  setEditProfile,
  setProfileClicked,
  setUserdata,
  success_logout,
  isUserRegistered,
  setUserRegistered,
  setislogin,
  error_general,
  setTeamInfoPage,
  setShowQr
}) {
  const clientId =
    "218396342180-14tf81vkmg8a2iu06831pp8prl1k1669.apps.googleusercontent.com";
  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://backendcepheus.cf/apiM2/getreg",
  //       {},
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       setUserdata((userdata) => ({
  //         ...userdata,
  //         regevents: res.data.regevents,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       error_general();
  //     });
  // }, []);

  // console.log(userdata.regevents);
  // console.log(
  //   userdata.imgurl.substr(
  //     userdata.imgurl.length - 4,
  //     userdata.imgurl.length - 1
  //   )
  // );
  return (
    <div class={isProfileClicked ? "profile profile-active" : "profile"}>
      <img src="" alt=""></img>
      <div class="profile-left">
        <img
          src={
            userdata.imgurl.substr(
              userdata.imgurl.length - 4,
              userdata.imgurl.length - 1
            ) === "null"
              ? "img/user_placeholder.png"
              : userdata.imgurl
          }
          alt="avatar"
          class="profile-image"
        ></img>
        {/* src={userdata.imgurl.substr(userdata.imgurl.length-5, userdata.imgurl.length-1)==="null"? "img/user_placeholder.png" : userdata.imgurl)} */}
        <img src="img/profile_name_border.png" alt="" class="name-border"></img>

        <p class="name">{userdata.firstName}</p>
        <p>{userdata.college}</p>
        <p>{userdata.email}</p>
        <p>{userdata.mobile}</p>
        {/* <p class="score"> <span> Score </span> - 500 </p> */}
      </div>
      <div className="profile-right">
        <div class="participated-events">
          <h2>Participated Events</h2>
          {userdata.regevents ? (
            <ol>
              {userdata.regevents.map((item, i) => {
                return <li>{event_names[item - 1]}</li>;
              })}
            </ol>
          ) : (
            <p>You have not participated in any event yet.</p>
          )}
        </div>
        <div className="profile-buttons">
          <div>
            <div className="buttons">
              <a
                class="edit"
                onClick={() => {
                  setEditProfile(true);
                  setProfileClicked(false);
                }}
              >
                Edit Profile
              </a>
              <a
                class="edit"
                onClick={() => {
                  setTeamInfoPage(true);
                  setProfileClicked(false);
                }}
              >
                Get Your Team Info
              </a>
              <GoogleLogout
                render={(renderProps) => (
                  <a
                    class="log-out"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Log Out
                  </a>
                )}
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={() => {
                  console.log("loggedout successfully");
                  setEditProfile(false);
                  setUserRegistered(true);
                  setislogin(false);
                  setShowQr(false);
                  setUserdata((userdata) => ({
                    ...userdata,
                    name: "",
                    id: "",
                    firstName: "",
                    email: "",
                    tokenId: "",
                    grade: "",
                    college: "",
                    regevents: [],
                  }));
                  axios
                    .post(
                        "https://backendcepheus.cf/apiM2/logout",
                        {},
                        { withCredentials: true }
                    )
                    .then((res) => {
                        console.log(res.data);
                        success_logout();
                        auth_reset();
                    })
                    .catch((err) => {
                        console.log(err);
                        error_general();
                        auth_continue();
                    });
                    // window.location.reload(false);
                }}
                
                onLogoutFailure={(err) => {
                  console.log(err);
                  error_general();
                  auth_continue();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { Component,useEffect,useState } from 'react'
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import "./Profile.css"
// import { gapi } from 'gapi-script';

// export default function Profile({isProfileClicked,auth_reset,auth_continue,userdata}) {

//     const clientId = '433800136317-usopqpji8k1tu6u1pq1r2t689j091p65.apps.googleusercontent.com';

//     return (
//         <div class={isProfileClicked ? "profile profile-active" : "profile"}>
//             <img src="" alt=""></img>
//             <div class="profile-left">
//                 <img src="img/avatar1.png" alt="avatar" class="profile-image"></img>
//                 <img src="img/profile_name_border.png" alt="" class="name-border"></img>

//                 <p class="name">{userdata.firstName}</p>
//                 <p>{userdata.college}</p>
//                 <p>{userdata.email}</p>
//                 <p>{userdata.mobile}</p>
//                 {/* <p class="score"> <span> Score </span> - 500 </p> */}

//             </div>
//             <div className="profile-right">
//                 <div class="participated-events">
//                     <h2>Participated Events</h2>
//                     <ol>
//                        <li>Treasure Hunt</li>
//                        <li>Beat The Street</li>
//                        <li>Hack Overflow</li>
//                        <li>Bridge Builder</li>
//                        <li>Front End Challange</li>
//                        <li>Play With Microbit</li>
//                     </ol>
//                 </div>
//                 <div className="profile-buttons">

//                     <div>

//                         <div >
//                         <a class="edit">Edit Profile</a>
//                         <GoogleLogout
//                         render={renderProps => (
//                             <a class="log-out" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out</a>
//                         )}
//                             clientId={clientId}
//                             buttonText="Logout"
//                             onLogoutSuccess={() => {console.log('loggedout successfully');auth_reset()}}
//                             onLogoutFailure={(err) => {console.log(err);auth_continue()}}
//                         />

//                         </div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
