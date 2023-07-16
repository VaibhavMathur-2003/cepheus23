import React, { useState } from "react";
import { useEffect } from "react";
import "./EditProfile.css";
import axios from "axios";
axios.defaults.withCredentials = true;

const link_initial =
  "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v16736772";

export default function EditProfile({
  isEditProfile,
  userdata,
  setEditProfile,
  setUserdata,
  success,
  error,
  avatar_female,
  avatar_male,
  error_general,
}) {
  const [name, setName] = useState(userdata.name);
  const [gender, setGender] = useState(userdata.gender);
  const [age, setAge] = useState();
  const [college, setCollege] = useState(userdata.college);
  const [grade, setGrade] = useState(userdata.grade);
  const [contact, setContact] = useState(userdata.mobile);
  const HandleEditProfile = (e) => {
    e.preventDefault();
    var grade_number = parseInt(e.target[5].value);
    if (userdata.gender !== gender) {
      let imgurl;
      let randnum = Math.floor(Math.random() * 6);
      if (gender === "Female") {
        imgurl = avatar_female[randnum].link;
      } else {
        imgurl = avatar_male[randnum].link;
      }
      setUserdata((userdata) => ({
        ...userdata,
        gender: e.target[2].value,
        age: e.target[3].value,
        college: e.target[4].value,
        grade: e.target[5].value,
        mobile: e.target[6].value,
        imgurl: link_initial + imgurl,
      }));
      axios
        .post(
          "https://backendcepheus.cf/apiM2/register",
          {
            // token: userdata.tokenId,
            user_name: userdata.name,
            college: e.target[4].value,
            mobile: e.target[6].value,
            grade: grade_number,
            image_url: imgurl,
          },
          { withCredentials: true }
        )
        .then((res) => {
          success();
          setEditProfile(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message) {
            error(err.response.data.message);
          } else {
            error_general();
          }
        });
    } else {
      setUserdata((userdata) => ({
        ...userdata,
        gender: e.target[2].value,
        age: e.target[3].value,
        college: e.target[4].value,
        grade: e.target[5].value,
        mobile: e.target[6].value,
      }));
      axios
        .post(
          "https://backendcepheus.cf/apiM2/register",
          {
            // token: userdata.tokenId,
            user_name: userdata.name,
            college: e.target[4].value,
            mobile: e.target[6].value,
            grade: grade_number,
          },
          { withCredentials: true }
        )
        .then((res) => {
          success();
          setEditProfile(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message) {
            error(err.response.data.message);
          } else {
            error_general();
          }
        });
    }
  };

  return (
    <div className="editprofile">
      <h2>Edit Profile</h2>
      <form action="post" onSubmit={(e) => HandleEditProfile(e)}>
        <label>Full Name</label>
        <br></br>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          value={userdata.email}
          disabled
        />
        <br></br>
        <label>Gender</label>
        <br></br>
        {/* <input type="text" name="gender" id="gender" placeholder="Enter your gender here" required/><br></br> */}
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <br></br>
        <label>Age</label>
        <br></br>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          onWheel={(e) => e.target.blur()}
          required
        />
        <br></br>
        <label>College/School Name</label>
        <br></br>
        <input
          type="text"
          name="college-school-name"
          id="clgsklname"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
        <br></br>
        <label>Grade</label>
        <br />
        <select
          name="grade"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
          <option value="13">B.Tech/ B.E./ B.Sc./ B.Com or equivalent</option>
          <option value="14">M.Tech / M.Com / M. Sc. or equivalent</option>
          <option value="15">PhD or equivalent</option>
        </select>
        <br></br>
        {/* <input type="number" name="grade" id="grade" placeholder="Enter your grade or program name here, e.g., BTech or 10th" required/><br /> */}
        <label>Contact Number</label>
        <br></br>
        <input
          type="text"
          name="contact"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <br></br>
        <button type="submit">Update</button>
      </form>
      <button
        type="cancel"
        class="edit-cancel"
        onClick={() => setEditProfile(false)}
      >
        Cancel
      </button>
    </div>
  );
}
