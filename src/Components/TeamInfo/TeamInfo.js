import "./TeamInfo.css";
import Select, { useStateManager } from "react-select";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const options = [
  { value: "1", label: "Lorem Ipsum" },
  { value: "2", label: "HackOverFlow" },
  { value: "3", label: "Circuital Dilemma" },
  { value: "5", label: "HackTheGames" },
  { value: "6", label: "CTF" },
  { value: "9", label: "Bridge Building Competition" },
  { value: "10", label: "Copy The Nature" },
  { value: "12", label: "Launch Galaset" },
  { value: "13", label: "KBC Quiz Competition" },
  { value: "14", label: "Maze Amaze" },
  { value: "16", label: "Treasure Hunt" },
  { value: "17", label: "Buy My Code" },
  { value: "20", label: "Arduino Workshop" },
  { value: "21", label: "EV Bike Competition" },
  { value: "23", label: "Dive the boat" },
];
export default function TeamInfo({ error, error_general, notRegistered, setTeamInfoPage}) {
  const [selectedId, setSelectedId] = useState();
  const [regInProcess, setRegInProcess] = useState(false);
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    teamCode: "",
    teamMembers: []
  })
  const [displayTeamDetails, setDisplayTeamDetails] = useState(false);
  const fetchTeamData = async () => {
    setRegInProcess(true);
    console.log(selectedId.value);
    await axios
      .post(
        "https://backendcepheus.cf/apiM2/getTeam",
        {
          event_id: selectedId.value,
        },
        { withCredentials: true }
      )
      .then(async (res) => {
        // success();
        //   setEditProfile(false);
        console.log(res);
        if (res.data === "") {
          notRegistered();
        } else {
          setTeamDetails((teamDetails) => ({
            ...teamDetails,
            teamName: res.data.team_name,
            teamCode: res.data.team_code
          }))
          await axios
          .post(
            "https://backendcepheus.cf/apiM2/getmates",
            {
              event_id: selectedId.value,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            setTeamDetails((teamDetails) => ({
              ...teamDetails,
              teamMembers: res.data.data
            }))
            setDisplayTeamDetails(true);
          })
          .catch((err) => {
            console.log(err);
            try {
              error(err.response.data.message);
            } catch {
              error_general();
            }
          });
        }
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
  };
  const handleChange = (selectedOption) => {
    setSelectedId(selectedOption);
    // console.log(selectedOption.value);
  };
  return (
    <div className="teaminfo">
      <i class="fa-solid fa-xmark" onClick={() => setTeamInfoPage(false)}></i>
      <div className={displayTeamDetails ? "teaminfo-visible teaminfo-hide" : "teaminfo-visible"}>
        <h2>Get Your Team Details</h2>
        <h3>Select the event for which you want to get Team Info</h3>
        <Select isClearable options={options} onChange={handleChange} />
        <button
          onClick={() => {
            fetchTeamData();
          }}
          disabled={!selectedId || regInProcess}
        >
          {regInProcess ? (
            <TailSpin
              height="30"
              width="30"
              // color="#fff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass="reg-loader-teaminfo"
              visible={true}
            />
          ) : (
            "Get Details"
          )}
        </button>  
      </div>
      <div class={displayTeamDetails ? "team-details" : "team-details teaminfo-hide" }>
        <h3>Your Team Details are:</h3>
        <p>Team Name: {teamDetails.teamName}</p>
        <p>Team Code: {teamDetails.teamCode}</p>
        <ol>
          {teamDetails.teamMembers.map((item, i) => {
            return (
              <li>
                {item.user_name} <br/> {item.email}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

// import React from 'react';

// import CreatableSelect from 'react-select/creatable';
// import { colourOptions } from '../data';

// export default () => <CreatableSelect isClearable options={colourOptions} />;
