import React, { useState } from "react";
import "./MainCard.css";

export default function MainCard({data}) {
  return(
    <div class="contact-main-card">
      <img class="main-card-border" src="img/Main_card_border.png" alt="Border"></img>
      <div class="main-card-content">
        <img src={data.photo} alt="Avatar"></img>
        <div class="main-card-contact-detail">
            <p class="name-role">{data.role}</p>
            <p class="name-role">{data.name}</p>
            <p class="contact">{data.email}</p>
            <p class="contact">{data.phone}</p>
        </div>
      </div>
    </div>
  )
}
