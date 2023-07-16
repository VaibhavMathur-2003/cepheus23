
import React, { useState } from "react";
import { useEffect } from "react";
import "./RegistrationPage.css"
import axios from "axios";
axios.defaults.withCredentials = true;
const link_initial = "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v16736772"

export default function RegistrationPage({isUserRegistered, userdata, setUserRegistered, setUserdata,success, reg_failed, error, avatar_male, avatar_female, error_general}){
    const [name, setName] = useState(userdata.name);
    const HandleRegistrationData = (e) => {
        e.preventDefault();
        let imgurl;
        let randnum = Math.floor(Math.random()*6);
        console.log(randnum);
        if(e.target[2].value==="Female"){
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
            name: e.target[0].value,
            imgurl: link_initial + imgurl
        }));        
        // var grade_number;
        // if(e.target[5].value[0]<='9' && e.target[5].value[0]>='0'){
        var grade_number = parseInt(e.target[5].value);

        // }
        axios.post("https://backendcepheus.cf/apiM2/register",
        {  
            // token: userdata.tokenId,
            user_name: e.target[0].value,
            college: e.target[4].value,
            mobile: e.target[6].value,
            grade: grade_number,
            image_url: imgurl
        },
        {withCredentials: true})
        .then((res) => {
            success();
            setUserRegistered(true);
        })
        .catch((err) => {
            console.log(err);
            if (err.response.data.message) {
                error(err.response.data.message);
            } else {
                error_general();
            }
        })
    }

    return (
        <div className="registration">
            <h2>Please fill out this form to participate.</h2>
            <form action="post" onSubmit={(e) => HandleRegistrationData(e)}>
                <label>Full Name</label><br></br>
                <input type="text" name="name" id="name" value={name} onChange = {(e) => setName(e.target.value)}/><br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" id="email" value={userdata.email} disabled/><br></br>
                <label>Gender</label><br></br>
                {/* <input type="text" name="gender" id="gender" placeholder="Enter your gender here" required/><br></br> */}
                <select name="gender" id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select><br></br>
                <label>Age</label><br></br>
                <input type="number" name="age" id="age" placeholder="Enter your age here" onWheel={(e) => e.target.blur()} required/><br></br>
                <label>College/School Name</label><br></br>
                <input type="text" name="college-school-name" id="clgsklname" placeholder="Enter your college/achool name here" required/><br></br>
                <label>Grade</label><br />
                <select name="gender" id="gender">
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                    <option value="13">B.Tech/ B.E./ B.Sc./ B.Com or equivalent</option>
                    <option value="14">M.Tech / M.Com / M. Sc. or equivalent</option>
                    <option value="15">PhD or equivalent</option>
                </select><br></br>
                {/* <input type="number" name="grade" id="grade" placeholder="Enter your grade or program name here, e.g., BTech or 10th" required/><br /> */}
                <label>Contact Number</label><br></br>
                <input type="text" name="contact" id="contact" placeholder="Enter your contact number here" required/><br></br>
                <small>By clicking on submit button you are agreeing our <a class="tnc-link" target="_blank" href="https://docs.google.com/document/d/1qXU5d1zNzGNyqzhW-15v2YwC3QSISnIWUD0CQvyv3u8/edit">Terms and Conditions</a></small>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}