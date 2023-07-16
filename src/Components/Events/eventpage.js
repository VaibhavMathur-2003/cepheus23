import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { TailSpin } from  'react-loader-spinner';
import { useEffect } from "react";
// import axios from "axios";
import axios from "axios";
import "./Events.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
axios.defaults.withCredentials = true;

export default function Eventcard({
  userdata,
  data,
  success_createteam,
  success_jointeam,
  success_regevent,
  error,
  setUserdata,
  islogin,
  notlogin,
  exiting,
  error_general,
  success_indregevent
}) {
  const teamSize = data.teamsize;
  const [create, setcreate] = useState(false);
  const [join, setjoin] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [createTeamName, setCreateTeamName] = useState("");
  const [displayteamcode, setdisplayteamcode] = useState(false);
  // const [createTeamNameind, setCreateTeamNameind] = useState("");
  const [joinTeamCode, setJoinTeamCode] = useState("");
  const [display_team_code, setdisplay_team_code] = useState("");
  const [regInProcess, setRegInProcess] = useState(false);

  const handleTeamCreation = async (e) => {
    e.preventDefault();
    setRegInProcess(true);
    setconfirm(true);
    let teamcode;
    await axios
      .post(
        "https://backendcepheus.cf/apiM2/createteam",
        {
          event_id: data.id,
          team_name: createTeamName,
        },
        { withCredentials: true }
      )
      .then(async (res) => {
        teamcode = res.data.team_code;
        // success();
        await axios
          .post(
            "https://backendcepheus.cf/apiM2/regevent",
            {
              event_id: data.id,
              team_code: teamcode,
            },
            { withCredentials: true }
          )
          .then(async (res) => {
            console.log(res.data);
            setdisplay_team_code(teamcode);
            setdisplayteamcode(true);
            await axios
              .post(
                "https://backendcepheus.cf/apiM2/getreg",
                {},
                { withCredentials: true }
              )
              .then( async (res) => {
                await setUserdata((userdata) => ({
                  ...userdata,
                  regevents: res.data.regevents,
                }));
              })
              .catch((err) => {
                console.log(err);
                try {
                  error(err.response.data.message);
                } catch {
                  error_general();
                }
              });
            success_createteam();
            // success();
          })
          .catch((err) => {
            console.log(err);
            try {
              error(err.response.data.message);
            } catch {
              error_general();
            }
          });
      })
      .catch((err) => {
        console.log(err);
        try {
          error(err.response.data.message);
        } catch {
          error_general();
        }
      });
      setRegInProcess(false);
      // setTimeout(() => {setRegInProcess(false)}, 10000);
  };
  const handleTeamCreationind = async (e) => {
    e.preventDefault();
    let teamcodeind;
    setRegInProcess(true);
    await axios
      .post(
        "https://backendcepheus.cf/apiM2/createteam",
        {
          event_id: data.id,
          team_name: userdata.email,
        },
        { withCredentials: true }
      )
      .then(async (res) => {
        teamcodeind = res.data.team_code;

        // success();
        await axios
          .post(
            "https://backendcepheus.cf/apiM2/regevent",
            {
              event_id: data.id,
              team_code: teamcodeind,
            },
            { withCredentials: true }
          )
          .then(async (res) => {
            console.log(res.data);
            success_regevent();
            setTimeout(() => {success_indregevent()}, 2000);
            await axios
              .post(
                "https://backendcepheus.cf/apiM2/getreg",
                {},
                { withCredentials: true }
              )
              .then((res) => {
                setUserdata((userdata) => ({
                  ...userdata,
                  regevents: res.data.regevents,
                }));
              })
              .catch((err) => {
                console.log(err);
                try {
                  error(err.response.data.message);
                } catch {
                  error_general();
                }
              });
            // success();
          })
          .catch((err) => {
            console.log(err);
            try {
              error(err.response.data.message);
            } catch {
              error_general();
            }
          });
      })
      .catch((err) => {
        console.log(err);
        try {
          error(err.response.data.message);
        } catch {
          error_general();
        }
      });
      setRegInProcess(false);
      // setTimeout(() => {setRegInProcess(false)}, 10000);
  };

  const handleJoinTeamCode = async (e) => {
    e.preventDefault();
    //   setconfirm(true);
    setRegInProcess(true);
    await axios
      .post(
        "https://backendcepheus.cf/apiM2/regevent",
        {
          event_id: data.id,
          team_code: joinTeamCode,
        },
        { withCredentials: true }
      )
      .then(async (res) => {
        console.log(res.data);
        await axios
          .post(
            "https://backendcepheus.cf/apiM2/getreg",
            {},
            { withCredentials: true }
          )
          .then((res) => {
            setUserdata((userdata) => ({
              ...userdata,
              regevents: res.data.regevents,
            }));
          })
          .catch((err) => {
            console.log(err);
            try {
              error(err.response.data.message);
            } catch {
              error_general();
            }
          });
        success_jointeam();
        success_indregevent();
        // success();
      })
      .catch((err) => {
        console.log(err);
        try {
          error(err.response.data.message);
        } catch {
          error_general();
        }
      });
      setRegInProcess(false);
      // setTimeout(() => {setRegInProcess(false)}, 10000);
  };

  const register = (e) => {
    if (!islogin) notlogin();
    else if (teamSize > 1) {
      setclicked(true);
    } else {
      console.log("individual event");
      // setCreateTeamNameind(userdata.email);
      // console.log(userdata.email)
      handleTeamCreationind(e);
      // console.log("succes yeah!!")
    }
  };
  // const close = () =>{

  // }
  const [clickedon, setclicked] = useState(false);

  return (
    //   <div class="contact-main-card">
    //     <img class="main-card-border" src="img/Main_card_border.png" alt="Border"></img>
    //     <div class="main-card-content">
    //       <img src="img/user_placeholder.png" alt="Avatar"></img>
    //       <div class="main-card-contact-detail">
    //           <p class="name-role">{data.role}</p>
    //           <p class="name-role">{data.name}</p>
    //           <p class="contact">{data.email}</p>
    //           <p class="contact">{data.phone}</p>
    //       </div>
    //     </div>
    //   </div>
    <div>
      <div style={clickedon ? { display: "none" } : { display: "block" }}>
        <center>
          <div id="outer">
            <div id="inner">
              <div id="inner-left">
                <div id="fake"></div>
                <img
                  draggable="false"
                  id="close2"
                  alt="exit"
                  src={data.exitsrc}
                  onClick={() => {
                    exiting();
                  }}
                ></img>
                <center>
                  <img
                    alt=""
                    draggable="false"
                    style={{ borderRadius: "15px" }}
                    id="left-post"
                    src={data.source}
                  ></img>
                  <br></br>
                  <h3
                    style={{ marginTop: "3px", color: "white" }}
                    id="sub-left-head"
                  >
                    Max Team-Size: {data.teamsize}
                  </h3>
                  {/* <br></br> */}
                  <h3
                    style={{ marginTop: "7px", color: "#acc3e8" }}
                    id="sub-left-head"
                  >
                    Contact:
                  </h3>
                  <h4 id="sub-sub-left-head"><span style={{ color: "#acc3e8" }}>Head:</span>{data.left1}</h4>
                  <h4 id="sub-sub-left-head"><span style={{ color: "#acc3e8" }}>Co-Head:</span>{data.left2}</h4>
                </center>
              </div>
              <div id="inner-right">
                <img
                  alt=""
                  draggable="false"
                  id="close1"
                  src={data.exitsrc}
                  onClick={() => {
                    exiting();
                  }}
                ></img>
                <center>
                  <h1 id="sub-head">{data.name}</h1>
                </center>
                <div id="para">
                  {data.para}
                  <center>
                    <MediaQuery maxWidth={700}>
                      <br></br>
                      <h3 style={{ marginTop: "3px", color: "white" }}>
                        Max Team-Size: {data.teamsize}
                      </h3>
                      {/* <br></br> */}
                      <h3 style={{ color: "#acc3e8" }}>
                        Contact:
                      </h3>
                      <h4><span style={{ color: "#acc3e8" }}>Head:</span>{data.left1}</h4>
                      <h4><span style={{ color: "#acc3e8" }}>Co-Head:</span>{data.left2}</h4>
                    </MediaQuery>
                  </center>
                </div>
                <center>
                  <button id="button-right" onClick={(e) => register(e)} disabled = {regInProcess}>
                  {regInProcess? 
                    <TailSpin
                    height="30"
                    width="30"
                    // color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{"width" : "100%", "text-align": "center"}}
                    wrapperClass="reg-loader"
                    visible={true}
                  />
                  : "Register"}
                  </button>
                </center>
              </div>
            </div>
          </div>
        </center>
      </div>
      <center>
        <div className={clickedon ? "popup_active" : "popup_inactive"}>
          <img
            draggable="false"
            id="formcls"
            alt=""
            style={{ cursor: "pointer" }}
            src={data.exitsrc}
            onClick={() => {
              setdisplay_team_code("");
              setdisplayteamcode(false);
              if (confirm) {
                setconfirm(false);
              } else {
                if (create == true || join == true) {
                  setcreate(false);
                  setjoin(false);
                } else {
                  setclicked(false);
                }
              }
            }}
          ></img>
          <center class={displayteamcode ? "input_inactive" : "input_active"}>
            <h1>Team Details</h1>
          </center>
          {/* <form> */}
          <div
            style={create || join ? { display: "none" } : { display: "block" }}
          >
            <button
              id="reg_team"
              onClick={() => {
                setcreate(true);
              }}
            >
              Create Team
            </button>
            <button
              id="reg_team"
              onClick={() => {
                setjoin(true);
              }}
            >
              Join Team
            </button>
          </div>

          <div className={create ? "create_active" : "create_inactive"}>
            <div style={displayteamcode?{display:'none'}:{display:'block'}}>
            <center>
              <label class={displayteamcode ? "input_inactive" : "input_active"}>Team Name</label>
              <label class={displayteamcode ? "teamcode_active" : "teamcode_inactive"}>Congratulations <br></br> You have successfully registered for the event</label>
              <br></br>
            </center>
            <input
              type="text"
              // name="teamname"
              placeholder="Team Name"
              // id="teamname"
              required
              value={createTeamName}
              onChange={(e) => setCreateTeamName(e.target.value)}
              class={displayteamcode ? "input_inactive" : "input_active"}
            />
            <br></br>
            <button id="reg_team1" onClick={(e) => handleTeamCreation(e)} class={displayteamcode ? "input_inactive" : "input_active"} disabled = {regInProcess}>
                  {regInProcess? 
                    <TailSpin
                    height="30"
                    width="30"
                    // color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="reg-loader"
                    visible={true}
                  />
                  : "Submit"}
            </button>
            <br />
            <br />
            </div>
            <center>
              <div style={displayteamcode?{display:'block'}:{display:'none'}}>
              <h2 style={{ color: "#acc3e8" }}>Congratulations</h2>
              <h2 style={{ color: "#acc3e8" }}>Successfully Registered</h2>
              </div>
              <label
                className={
                  displayteamcode ? "teamcode_active" : "teamcode_inactive"
                }
              >
                Team Code : {display_team_code}
              </label>
              <br />
              <br />
              <div
                className={
                  displayteamcode ? "teamcode_active" : "teamcode_inactive"
                }
              >
                Kindly save the team code and pass it along to your teammates so they may join the team. <br/> Also, please check your email inbox for further details about the event, noting that the email may be in your spam folder.
              </div>
              <br></br>
            </center>
          </div>
          <div className={join ? "create_active" : "create_inactive"}>
            <div className={confirm ? "create_inactive" : "create_active"}>
              <center>
                <label>Team Code</label>
                <br></br>
              </center>
              <input
                type="text"
                placeholder="Team Code"
                //   id="teamname"

                required
                value={joinTeamCode}
                onChange={(e) => setJoinTeamCode(e.target.value)}
              />
              <br></br>
              <button id="reg_team1" onClick={(e) => handleJoinTeamCode(e)} disabled = {regInProcess}>
                  {regInProcess? 
                    <TailSpin
                    height="30"
                    width="30"
                    // color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="reg-loader"
                    visible={true}
                  />
                  : "Submit"}
              </button>
            </div>
            <div className={confirm ? "create_active" : "create_inactive"}>
              <center>
                <label>Confirm Team Code</label>
                <br></br>
              </center>
              <input
                type="text"
                //   name="teamname"
                placeholder="Confirm Team Code"
                //   id="teamname"
                required
              />
              <br></br>
              <button id="reg_team1" disabled = {regInProcess}>
              {regInProcess? 
                <TailSpin
                    height="30"
                    width="30"
                    // color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="reg-loader"
                    visible={true}
                  />
                  : "Submit"}</button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </center>
    </div>
  );
}
