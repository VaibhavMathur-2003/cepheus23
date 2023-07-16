// import React from "react";
// import "./Home.css";

// export default function Home() {
//   return(
//     <div className="home" id="home">
//         <div className="firstlayer">
//             <img src="img/blueplanet.png" alt="" />
//         </div>
//     </div>
//   )
// }


import React, {useRef} from "react";
import "../Home/Home.css";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bluePlanet from "../Home/bluePlanet.png";
import rocket from "../Home/homeRocket.png";
import pink from "../Home/fullPink.png";
import land from "../Home/land.png";
const Home = () => {
  const ref = useRef();
  const date = new Date('February 8, 2023 00:00:00').getTime();

  return (
    <div className="home" id="Home">
      <Parallax className="home" pages={4} ref={ref}>
        <ParallaxLayer
          sticky={{ start: 0, end: 1.3 }}
          offset={0}
        >
          <img className="bluePlanet" src={bluePlanet} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} >
          <div className="title">
          <img className="rocket" src={rocket} alt="" />

            <div className="heading">CEPHEUS</div>
            <div className="subHeading">TECHNICAL FEST OF IIT GOA</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer   offset={2} >
          <div className="homeSecond">
          <img className="pinkPlanet" src={pink} alt="" />
          <div className="theme">OUR <br/> THEME</div>
          </div>
          <div className="themeDes">
          The inevitable fight between a rogue AI and mankind has shook the Cepheus verse to its core. War has ensued, but not all hope is lost. Be a part of the elite Cepheus Ciphers and navigate through these troubled waters using your technical skills. Take this journey of a lifetime and immerse yourself in the interactive multiverse of Cepheus.
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={3} >
          <img className="pink" src={pink} alt="" />
          <div className="thirdHome">
            <div className="journey"> THE JOURNEY BEGINS IN</div>
            <div className="clock"><Countdown className="clock" date={Date.now() + (date - Date.now())} /></div>
          </div>
          <img className="land" src={land} alt="" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;