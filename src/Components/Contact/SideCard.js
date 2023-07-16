import React, { useState } from "react";
import "./SideCard.css";

export default function SideCard({id, role, handleClick, photo}) {
  return(
    <div class="contact-side-card" onClick={() => {handleClick(id)}}>
      <img class="side-card-border" src="img/Side_card_border.png" alt="Border"></img>
      <div class="side-card-content">
        <img src={photo} alt="avatar"></img>
        <p class="side-card-position">{role}</p>
      </div>
    </div>
  )
}
