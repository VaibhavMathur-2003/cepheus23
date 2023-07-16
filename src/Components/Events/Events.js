// import logo from './logo.svg';
import Eventcard from './eventpage'
import { Component, createRef } from 'react';
import './Events.css';
// import im1 from './Events-Images/online.png'
// import im2 from './Events-Images/offline.png'
// import im3 from './Events-Images/talks.png'
import im4 from './Events-Images/button_final1.png'
import MediaQuery from 'react-responsive';
import { useState, useEffect, useRef } from 'react';
// import './style.css';
import React from "react";
// import useVH from 'react-viewport-height';
// import { withViewportHeight } from 'react-viewport-height';
// import { render } from '@testing-library/react';



const myStyle = {
    height:"100vh",
    // width:"100%",
    backgroundImage:'url(./background.png)',
    
    backgroundAttachment:"fixed",
    backgroundPosition:"center",
    backgroundRepeat:'no-repeat',
  
    backgroundSize:'cover',
  }
  const listStyle = {
    listStyle:'none',
    display:'flex',
    // alignItems:'center',
    marginTop:'6%',
    flexDirection:'row',
    justifyContent:'space-around',
	width:'80vw',
    marginLeft:'8.6%'
  }
  const listStyle1 = {
    listStyle:'none',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginLeft:'-2.2vw'
  }
  const listStyle2 = {
    listStyle:'none',
    display:'flex',
    width:'80%',
    justifyContent:'space-around',
    marginLeft:'-3.5vw',
    marginTop:'6%',
  }
  const elemStyle = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./offline.png)',
	transition: "all ease 0.3s"
	// width:'45%',
	// height:'2%',
  }
  const elemStyleoff = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./online.png)',
  }
  const elemStylemed = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./offline.png)',
	width:'180px',
	height:'180px',
  }
  const elemStyleoffmed = {
    // hover:"scale(1.2)",
    backgroundImage:'url(./online.png)',
	width:'180px',
	height:'180px',
  }
  
  const buttonStyle = {
    marginTop:"5.5%",
    width:'250px',
    height:'50px',
    cursor:"pointer",
  }
  const elemstyle700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    backgroundSize:'cover',
    width:"165px",
    height:"165px",
    cursor:"pointer",
  }
  const elemstyle1700 = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    backgroundSize:'cover',
    width:"16vw",
    height:"16vw",
    cursor:"pointer",
  }
  const elemmobst = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./postcar.png)',
    backgroundSize:'cover',
    width:"15vh",
    height:"15vh",
	marginTop:'20px',
    cursor:"pointer",
	marginLeft:'-20px'
  }
  const listStylemob = {
    listStyle:'none',
    display:'block',
    marginTop:'-2%',
	width:'200px',
  }
  const elemstyle700mob = {
	// hover:"scale(1.2)",
    backgroundImage:'url(./elem.png)',
    backgroundSize:'cover',
    width:"18vh",
    height:"18vh",
	marginTop:'23px',
    cursor:"pointer",
  }
  const listStyle2mob = {
    listStyle:'none',
    display:'block',
    width:'90%',
    justifyContent:'space-around',
    marginLeft:'-4%',
    marginTop:'6%',
  }

  



  


class Events extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {clicked:false};
		this.state = {clicked2:false};
		this.state = {clicked3:false};
		this.state = {clickedtwo:false};
		this.state = {eventtwo:false};
		this.state = {eventthree:false};
		this.state = {eventfour:false};
		this.state = {eventfive:false};
		this.state = {eventsix:false};
		this.state = {eventseven:false};
		this.state = {eventeight:false};
		this.state = {eventnine:false};

		this.state = {clickedtwooff:false};
		this.state = {eventtwooff:false};
		this.state = {eventthreeoff:false};
		this.state = {eventfouroff:false};
		this.state = {eventfiveoff:false};
		this.state = {eventsixoff:false};
		this.state = {eventsevenoff:false};
		this.state = {eventeightoff:false};
		this.state = {eventnineoff:false};

		this.state = {clickedtwotal:false};
		this.state = {eventtwotal:false};
		this.state = {eventthreetal:false};
		this.state = {eventfourtal:false};
		this.state = {eventfivetal:false};
		this.state = {eventsixtal:false};
		this.state = {eventsevental:false};
		this.state = {eventeighttal:false};
		this.state = {eventninetal:false};
		this.state = {reset:false};
		this.state = {animstop:false};
		this.state = {animstop1:false};
		this.state = {eventcarou:0};
		this.state = {eventcaroone:0};
		this.state = {eventcartwo:0};
		
		this.state = {
			left1 : 'ABX2',
			left2 : 'ABX',
			name : 'Event1',
			border: './border1.png',
			source: './poster.png',
			exitsrc: './exit.png',
			para: 'hello world',
		}
		this.state = {eveno:0};

		
			function useInterval(callback, delay) {
				const savedCallback = useRef();
			  
				// Remember the latest callback.
				useEffect(() => {
				  savedCallback.current = callback;
				}, [callback]);
			  
				// Set up the interval.
				useEffect(() => {
				  function tick() {
					savedCallback.current();
				  }
				  if (delay !== null) {
					let id = setInterval(tick, delay);
					return () => clearInterval(id);
				  }
				}, [delay]);
			  }
		
		
		
	}
	state = {
		eventcarou: 0,
		eventcaroone: 0,
		eventcartwo: 0,
	  }
	
	  intervalId = 0;
	  
	
	  incrementCount = () => {
		
			this.setState(prevState => {
				// console.log(prevState.animstop);
			if (prevState.animstop==false&&prevState.animstop1==false){
				let nextCount = prevState.eventcarou + 1;
				if (nextCount > 3) {
				
				nextCount = 0;
				}
				return { eventcarou: nextCount};
			}
			
			
			});
			this.setState(prevState => {
			if (prevState.animstop==false&&prevState.animstop1==false){
				let nextCountone = prevState.eventcaroone + 1;
				if (nextCountone > 3) {
				nextCountone = 0;
				}
				return { eventcaroone: nextCountone };
			}
			
			});
			// this.setState(prevState => {
			// if (prevState.animstop==false){
			// 	let nextCounttwo = prevState.eventcartwo + 1;
			// 	if (nextCounttwo > 2) {
			// 	nextCounttwo = 0;
			// 	}
			// 	return { eventcartwo: nextCounttwo };
			// }
			
			// });
		
	  }
	
	  componentDidMount() {
		this.intervalId = setInterval(this.incrementCount, 5000);
		this.componentDidMountone();
		this.componentDidMountthree();
	  }
	
	  componentWillUnmount() {
		clearInterval(this.intervalId);
		this.componentWillUnmounttwo();
		this.componentWillUnmountfour();
	  }




	  state = {
		animate: false,
	  };
	
	  targetRef = createRef();
	  
	  componentDidMountone() {
		const observer = new IntersectionObserver(
		  (entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
			  this.setState({ animate: entry.isIntersecting });
			}
		  },
		  { root: null, rootMargin: '0px', threshold: 0.1 }
		);
		const target = this.targetRef.current;
		if (target) observer.observe(target);
	  }
	
	  componentWillUnmounttwo() {
		const observer = new IntersectionObserver(
		  (entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
			  this.setState({ animate: entry.isIntersecting });
			}
		  },
		  { root: null, rootMargin: '0px', threshold: 0.1 }
		);
		const target = this.targetRef.current;
		if (target) observer.unobserve(target);
	  }



	  state = {
		viewportHeight: 0,
	  };
	
	  componentDidMountthree() {
		this.setState({ viewportHeight: window.innerHeight });
		window.addEventListener('resize', this.updateViewportHeight);
	  }
	
	  componentWillUnmountfour() {
		window.removeEventListener('resize', this.updateViewportHeight);
	  }
	
	  updateViewportHeight = () => {
		this.setState({ viewportHeight: window.innerHeight });
	  };
	
	
	render(){
		
		const eveno = this.state.eveno;
		const clicked = this.state.clicked;
		const clicked2 = this.state.clicked2;
		const clicked3 = this.state.clicked3;
		const clickedtwo = this.state.clickedtwo;
		const eventtwo = this.state.eventtwo;
		const eventthree = this.state.eventthree;
		const eventfour = this.state.eventfour;
		const eventfive = this.state.eventfive;
		const eventsix = this.state.eventsix;
		const eventseven = this.state.eventseven;
		const eventeight = this.state.eventeight;
		const eventnine = this.state.eventnine;

		const clickedtwooff = this.state.clickedtwooff;
		const eventtwooff = this.state.eventtwooff;
		const eventthreeoff = this.state.eventthreeoff;
		const eventfouroff = this.state.eventfouroff;
		const eventfiveoff = this.state.eventfiveoff;
		const eventsixoff = this.state.eventsixoff;
		const eventsevenoff = this.state.eventsevenoff;
		const eventeightoff = this.state.eventeightoff;
		const eventnineoff = this.state.eventnineoff;

		const clickedtwotal = this.state.clickedtwotal;
		const eventtwotal = this.state.eventtwotal;
		const eventthreetal = this.state.eventthreetal;
		const eventfourtal = this.state.eventfourtal;
		const eventfivetal = this.state.eventfivetal;
		const eventsixtal = this.state.eventsixtal;
		const eventsevental = this.state.eventsevental;
		const eventeighttal = this.state.eventeighttal;
		const eventninetal = this.state.eventninetal;
		const eventcarou = this.state.eventcarou;
		const eventcaroone = this.state.eventcaroone;
		const eventcartwo = this.state.eventcartwo;
		const reset = this.state.reset;
		const animstop = this.state.animstop;
		const animstop1 = this.state.animstop1;
		// this.setState({animstop:false});
		///c_scale,q_auto:eco,w_240

		const willstop = () =>{
			this.setState({animstop1:false});
		}
		

		


		const listData =[ {
			teamsize: 2,
			left1 : 'Utsav Bansal (6267184086)',
			left2 : 'Madhura Botave (8830846416)',
			id : 1,
			name : 'Lorem IIpsum',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675401216/cepheus23_posters/LOREM_IPSUM_4x_husxdv.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675401216/cepheus23_posters/LOREM_IPSUM_4x_husxdv.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "If you think you have an eye for design, worry not we’ve got you! The Lorem Ipsum is a UI/UX Design Challenge for all you creative designers out there! As a part of this event, the participant must design a website using the provided content (text and images) and turn in their submissions before the clock runs out. Also do keep in mind, the website should revolve around the theme- ‘Multiverse’. We look forward to seeing your innovation in action."			
			
			


		},
		{
			teamsize: 3,
			left1 : 'Aditya Koshti (8767313024)',
			left2 : 'Naman Gupta (9403264682)',
			id : 2,
			name : 'HackOverFlow',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/WEB_HACKOVERFLOW_4x_waua5k.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/WEB_HACKOVERFLOW_4x_waua5k.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'From functionality and appearance to navigation and coding integrity, a lot goes into creating an eye-catching, user-friendly website. We bring to you an amusing challenge where every participating team will have to develop a website based on the theme, “Multiverse survival”. The team will have to work on the topic and create a fully functional website. There may be a presentation round as well to track your progress.!',
			
			
			


		},
		{
			teamsize: 3,
			left1 : 'Atharva Bhawsar (9643204258)',
			left2 : 'Anushka Srivastava (7987274593)',
			id : 3,
			name : 'Circuital Dilemma',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724087/cepheus23_posters/web_Circuital_Dilemma_V1_4x_gqyc93.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724087/cepheus23_posters/web_Circuital_Dilemma_V1_4x_gqyc93.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'This event offers an opportunity to test your digital circuit problem-solving skills using logic and innovation while retaining the spirit of collective learning. The two-stage submission process involves tackling some real-life problems while being constrained to a given time. The First stage consists of short but tricky MCQs and the participants would need to solve the questions in a short timeframe. This will be an elimination round. The teams who reach the second round will have to solve some really interesting yet complex real life problems based on multiple concepts of Digital Design and Digital Circuits.',
			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Ananya Alekar (8424942069)',
			left2 : 'Abhinav Reddy (9392534843)',
			id : 4,
			name : 'Data Science Hackathon',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724087/cepheus23_posters/WEB_dATASCIENCE_4x_qg7k1v.png',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724087/cepheus23_posters/WEB_dATASCIENCE_4x_qg7k1v.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'We are living in a world of big data that is empowering businesses and organizations to make data-driven decisions.  Delve deep into your Data Science skills and build an ML model to help a planet that is facing an unprecedented problem. The problem statements involve tackling some real-life problems and using the insights gained to guide decision-making and strategic planning.',
			
			
			


		},
		{
			teamsize: 2,
			left1 : 'Tiya Gupta (8810506020)',
			left2 : 'Akash Khandelwal (9923041275)',
			id : 5,
			name : 'HackTheGames',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724091/cepheus23_posters/WEB_Hack_The_Games_4x_lseb12.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724091/cepheus23_posters/WEB_Hack_The_Games_4x_lseb12.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Gesture recognition is an active research field in Human-Computer Interaction technology. It has many applications in virtual environment control, sign language translation, robot control, and music creation. In this workshop, you will be able to learn and understand how gesture recognition is implemented using OpenCV, following which there will be a hackathon. Participants will have to automate any game of their choice with the use of hand gestures, thereby creating a virtual mouse.',
			

		},
		{
			teamsize: 4,
			left1 : 'Akhil T. Sivakumar (9989152948)',
			left2 : 'Khushi Chaudhary (8318921233)',
			id : 6,
			name : 'CTF',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724079/cepheus23_posters/web_CTF_4x_hntg9n.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724079/cepheus23_posters/web_CTF_4x_hntg9n.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Get ready for a thrilling 3-day event where teams will put their cybersecurity skills to the test in the ultimate challenge: Capture The Flag! It's all about solving puzzles and finding the hidden flags. Each challenge will have its own level of difficulty and corresponding points awarded to the team. The team with the most points in the shortest amount of time will emerge victorious. So gather your team and sharpen your puzzle-solving skills, it's time to Capture The Flag!",
			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Rohith G (8248539650)',
			left2 : 'Harsh Kankrecha (6353323553)',
			id : 7,
			name : 'FizzBuzz',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/WEB_fizzbuzz_4x_lmzxto.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/WEB_fizzbuzz_4x_lmzxto.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Introducing FizzBuzz, a competitive coding contest where participants will put their algorithm skills to the test. You'll have 2 hours to solve as many problems as you can. It's an individual event so you'll be going head-to-head against the best of the best. But don't worry if you're new to the game, we designed the event to give everyone, regardless of skill level, a chance to shine. So, do you have what it takes to conquer FizzBuzz and come out on top? Let's find out!",
			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Sai Adarsh (8688530237)',
			left2 : 'Abhinav Reddy (9392534843)',
			id : 8,
			name : 'Coder\'s Infinity War\n(Online Treasure Hunt)',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724106/cepheus23_posters/WEB_Online_Treasure_Hunt_4x_z92rog.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724106/cepheus23_posters/WEB_Online_Treasure_Hunt_4x_z92rog.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Are you ready for the ultimate coding thrill ride? Join the 18-hour Treasure Hunt of Code where you\'ll tackle 5 rounds of pulse-pounding coding challenges. Put your skills to the test, earn points, and climb to the top of the leaderboard on a single platform. Outsmart the competition and survive eliminations to claim the ultimate prize as the champion coder.',
			
			
			


		},
		{
			teamsize: 4,
			left1 : 'Vaidehi Chougule (8080586791)',
			left2 : 'Aditya Muvarappu (9584848383)',
			id : 9,
			name : 'Bridge Building Competition',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724079/cepheus23_posters/web_bridge_building_4x_h4qprk.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724079/cepheus23_posters/web_bridge_building_4x_h4qprk.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'We\'ve all heard the poem \"London Bridge is falling down, falling down, falling down,\" but have you ever wondered why the bridge is going down? Of course, as a result of poor design! To ensure nothing like that happens again, in this challenge, it is up to you to design an extraordinarily well-planned bridge provided that all the given constraints are fulfilled.',
			
			
			


		},
		{
			teamsize: 4,
			left1 : 'Nikhil Kumar (7739625907)',
			left2 : 'Tarun Vasupally (6304614040)',
			id : 10,
			name : 'Copy the nature',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724081/cepheus23_posters/web_copythenature_4x_v1c6uh.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724081/cepheus23_posters/web_copythenature_4x_v1c6uh.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Showcase your passion for 3D modeling with this competition. Participants in this challenge must create a 3D model of a living creature with no restrictions on creativity. The species can be extinct or even fictitious, so let your imagination take the wheel and start designing!',
			
			
			


		},
		{
			teamsize: 5,
			left1 : 'Pavithra T Soman (9446091496)',
			left2 : 'Akarsh Jha (9354078200)',
			id : 12,
			name : 'Launch Galaset',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/web_LAUNCH_GALASET_4x_o5icab.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/web_LAUNCH_GALASET_4x_o5icab.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'The hype that Shark Tank India created, a few months back, was real! It had all of us glued to our seats, and sparked our minds with curiosity and awe. We’re planning to give you a similar experience this year. Except, that you’ll not be watching this time. You’ll be the one pitching your ideas to the panel of investors in front of you. Pitch your startup ideas, specifically in the domain of FinTech in under 7 minutes. Stand a chance to be noticed by the investors and get their help in financing your ideas.',
			
			
			


		},
		{
			teamsize: 2,
			left1 : 'Suyash Jaduan (8770321291)',
			left2 : 'Ashish Rathaur (9720188699)',
			id : 13,
			name : 'KBC Quiz',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/web_kbc_4x_kkvt2b.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724094/cepheus23_posters/web_kbc_4x_kkvt2b.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Step right up folks and join the KBC quiz-tastic event of the year! Where finance is the name of the game and speed is the key to victory. Gather a partner and get ready to race against the clock, answering questions faster than a cheetah on steroids. But beware, one wrong move and you'll be deductin' points faster than a bank charges fees. So brush up on your finance knowledge and let the good times roll!",
			
			
			


		},
		{
			teamsize: 4,
			left1 : 'Hetarth Bhatt (8780632021)',
			left2 : 'Ayush Yadav (9118319300)',
			id : 14,
			name : 'Maze Amaze',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724112/cepheus23_posters/WEB_maze_amaze_4x_cluiei.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724112/cepheus23_posters/WEB_maze_amaze_4x_cluiei.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Have you ever dreamed of building a bot that can solve a maze on its own? Well, now you get a chance to do so! We challenge you to create a line-follower robot that can keep track of directions while solving a maze, analyze the path in the Dry run, and use this information in the Actual run to traverse the maze in the shortest possible time.',
			
			
			


		},
		
		{
			teamsize: 2,
			left1 : 'Swamini Shirsat (7875722003)',
			left2 : 'Vaibhav Mathur (6377882468)',
			id : 15,
			name : 'Scratch Competition',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724112/cepheus23_posters/WEB_scratch_comp_4x_zbpdqc.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724112/cepheus23_posters/WEB_scratch_comp_4x_zbpdqc.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'A fun event for school students to introduce them to the world of programming using scratch. Scratch is a tool that allows people to explore the world of coding and logic flow without having any prior knowledge. This would be a workshop cum hackathon in which we would be demonstrating how to build a game using scratch followed by a problem statement. The participants have to create a game based on the problem statement implementing what has been demonstrated in the workshop. We aim to teach the importance of coding to students and introduce them to the basic logic flow and structure behind programming.',
		},
		{
			teamsize: 4,
			left1 : 'Prathamesh Yeole (9518718463)',
			left2 : 'Abhay Tiwari (8299307702)',
			id : 16,
			name : 'Treasure hunt',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724106/cepheus23_posters/web_treasurehunt_4x_jzwk0h.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724106/cepheus23_posters/web_treasurehunt_4x_jzwk0h.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'The event is somewhat similar to Treasure Hunt but in a computer sciency way! Participants would have to solve tricky questions of competitive programming to find clues for the next waypoint. The event will be conducted in two phases - Snail trail and Escape room. In snail trail, the participants would have to collect multiple clues, each clue leading to another. All the clues collected in the first round will be useful in the second round in which the teams will be separated in different rooms and will be given a task to solve in which the previous clues will be useful. So get ready to solve these brain racking problem statements and awaken the Sherlock Holmes within you!',
			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Shreya Marda (7676286680)',
			left2 : 'Akash (9923041275)',
			id : 11,
			name : 'Rule The Market',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724104/cepheus23_posters/WEB_RULE_THE_MARKET_4x_hbvhjw.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724104/cepheus23_posters/WEB_RULE_THE_MARKET_4x_hbvhjw.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Whether you are new to the trading and investing world or have some prior experience in the stock markets, Cepheus brings to you its Mock Trading competition organized by Alpha - The Finance Club of IIT Goa. The stakes are high and so are the rewards. The trading assets will happen with virtual money but the winners on the Leader-board (where the ranking will be based on the profits made) will win cash prizes and more."			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Abhay Tiwari (8299307702)',
			left2 : 'Mulayam (9817568174)',
			id : 18,
			name : 'Pare It Down',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1674155655/cepheus23_posters/WEB_PAIRITDOWN_4x_mldnq7.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1674155655/cepheus23_posters/WEB_PAIRITDOWN_4x_mldnq7.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Want to flex your coding muscles and have a blast doing it? Look no further! We're bringing you an event that'll take you on a wild coding journey, from easy-peasy intro rounds to brain-melting challenges. We've got five rounds in store for you: Introduction to a new language, Debugging Round, Brain Racker, Blind Code, and CP with risk and reward. Each round will have its own set of challenging problems that'll test your skills and push you to level up. The clock is ticking, so grab your keyboard and let's code like crazy!",
			
			
			


		},
		{
			teamsize: 3,
			left1 : 'Varun Singh (9958357706)',
			left2 : 'Yash Bhansali (7304893913)',
			id : 20,
			name : 'Arduino\'s Trial',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724083/cepheus23_posters/web_Arduino_s_trial_4x_vlhvot.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724083/cepheus23_posters/web_Arduino_s_trial_4x_vlhvot.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'In order to expand the knowledge of participants we will be hosting a workshop followed by a competition on Arduino. The entire workshop is split into 3 sessions, during which the facilitators will explain the fundamentals of Arduino and other basic sensors and motors while also demonstrating some live projects using both hardware and software. Whatever your skill level is, you’re sure to have fun as you will learn to harness the power of Arduino in your own DIY projects.',
			
			
			


		},
		{
			teamsize: 2,
			left1 : 'Arnav Kamat (8237063638)',
			left2 : '',
			id : 17,
			name : 'Buy My Code',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724083/cepheus23_posters/web_Buy_My_Code_4x_mqgyu7.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724083/cepheus23_posters/web_Buy_My_Code_4x_mqgyu7.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: "Calling all code wizards and trading gurus! Have you ever dreamed of combining your love for programming with your passion for trading? Well, dream no more! We're hosting an event that'll put your skills to the ultimate test. Think of it like a barter system for code, where problem statements are released and participants must create functions to solve them. The best part? The name and description of all the functions will be open to everyone, so you can trade the hottest code on the market. Ready to flex your coding and trading muscles? Let's do this!",
			
			
			


		},
		{
			teamsize: 1,
			left1 : 'Nandini B. (9094357472)',
			left2 : 'Vaidehi Chougule (8080586791)',
			id : 19,
			name : 'Game Theory Event',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724091/cepheus23_posters/WEB_game_theory_4x_oidpxd.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724091/cepheus23_posters/WEB_game_theory_4x_oidpxd.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'It\'s riveting to see how games and human nature can get complicated and interesting at the same time. Game Theory is the tool in use to comprehend the subtle relation between the two. It also lays the foundation for some profound algorithms used in AI today. If Game Theory is back on the grid, so are we. There would be a faceoff between participants in each round, which will consist of multiple games. The selected players would proceed to the next round and climb up the Leaderboard. So keep an eye out for everyone\'s strengths and weaknesses, and get ready to play on both fronts.',
			
			
			


		},
		
		{
			teamsize: 1,
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			id : 22,
			name : 'Line Maze Fun game',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Ever solved those fun mazes at the back of your notebooks? This event is all about maze solving but the catch is that you will have to solve it using a ROBOT!! All participants will be given an RC car which they have to maneuver through the maze.  The car will be equipped with IR sensors in every direction. If the car touches the line, the sensors will pick up the signal, a buzzer will go off and the player will fall out of the game. This is a fun event so be ready to put your RC driving skills to the test!',
			
			
			


		},
		{
			teamsize: 2,
			left1 : '1.Abcd Xyz (9884736273)',
			left2 : '2.Abcd Xyz (9884736273)',
			id : 23,
			name : 'Dive the Boat',
			source: './poster.png',
			source1: './poster.png',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'Have you ever played with Legos? If yes: you have an edge! If not: your time has arrived! Get ready to build a boat and wade through uncertain waters without losing your hold. You will be given lego building bars, a motor, and a battery to create your own boat. You must configure the boat in such a way that it reaches a certain distance or person within the stipulated time.',
			
			
			


		},
		{
			teamsize: 18,
			left1 : 'Runal Palkar (9137884831)',
			left2 : '',
			id : 21,
			name : 'E-Bike Competition',
			source: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724088/cepheus23_posters/WEB_EBIKE_4x_pdprj1.webp',
			source1: 'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1673724088/cepheus23_posters/WEB_EBIKE_4x_pdprj1.webp',
			border: './border1.png',
			exitsrc: './exit.png',
			para: 'The E-bike competition is a 2-wheeler electric vehicle event for all enthusiasts of electric vehicle technology and sustainable transportation. Participants will have the opportunity to showcase their skills in design, engineering, and innovation as they compete against their peers to build the cheapest and most efficient E-bike.  The competition will include a series of tests that the participants have to pass to gain points and top the leaderboard. Whether you&apos;re a student, or a professional, this is a unique opportunity to push the boundaries of E-bike design and performance. Join us and be a part of the future of sustainable transportation.'
			
			
			


		},
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Event6',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Event7',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Event8',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Event9',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Lorem Ipsum is a website designing event wherein you will be given some text and images as content for which you must design a website, with reference to the theme Squid Game, within a given time period of 4 hours. It’s time to get those creative juices flowing and put your designing skills to the test!',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Copy the nature',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Showcase your passion for 3D modeling with this competition. Participants in this challenge must create a 3D model of a living creature with no restrictions on creativity. The species can be extinct or even fictitious, so let your imagination take the wheel and start designing!',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Dive the bOAt (Fun Event)',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Have you ever played with Legos? If yes: you have an edge! If not: your time has arrived! Get ready to build a boat and wade through uncertain waters without losing your hold You will be given lego building bars, a motor, and a battery to create your own boat. You must configure the boat in such a way that it reaches a certain distance or person within the stipulated time.',
			
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Climbing Up the challenge',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'Put your problem-solving skills to the test in this event that will test your knowledge in the mechanical domain through our curated set of puzzles and trivia. We will present you with four checkpoints and the first team to successfully complete all four will be declared the winner. We hope to see interesting and intuitive approaches from the participants.',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Game Theory event',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'It\'s riveting to see how games and human nature can get complicated and interesting at the same time. Game Theory is the tool in use to comprehend the subtle relation between the two. It also lays the foundation for some profound algorithms used in AI today. If Game Theory is back on the grid, so are we. There would be a faceoff between participants in each round, which will consist of multiple games. The selected players would proceed to the next round and climb up the Leaderboard. So keep an eye out for everyone\'s strengths and weaknesses, and get ready to play on both fronts.',
			
			
			


		// },
		// {
		// 	teamsize: 1,
		// 	left1 : '1.Abcd Xyz (9884736273)',
		// 	left2 : '2.Abcd Xyz (9884736273)',
		// 	id : 0,
		// 	name : 'Arduino Workshop',
		// 	source: './poster.png',
		// 	source1: './poster.png',
		// 	border: './border1.png',
		// 	exitsrc: './exit.png',
		// 	para: 'In order to expand the knowledge of participants we will be hosting a workshop followed by a competition on Arduino The entire workshop is split into 3 sessions, during which the facilitators will explain the fundamentals of Arduino and other basic sensors and motors while also demonstrating some live projects using both hardware and software. Whatever your skill level is, you’re sure to have fun as you will learn to harness the power of Arduino in your own DIY projects.'
			
			
			
			


		// },
		];
		
		
		
		

		
		

		  
	
		
		const { viewportHeight } = this.state;
		console.log(viewportHeight);
		var marg = 0;
		if (viewportHeight>1109){
			marg = viewportHeight*0.21;
		}else{
			marg = viewportHeight * 0.1;
		}
		
		
		return (
			<div className="events" id="Events" ref={this.targetRef}>
				
				<div className="events-bg">
					<br></br>
					<br></br>
					<br></br>
					{/* <br></br> */}
					<h1 className="myStyleh2" style={{fontFamily: 'SpaceBoards'}}>EveNts</h1>
	
					{/* <div className={clicked||clicked2||clicked3?'secondoff1':'firston1'}> */}
					<div className={this.state.animate ?  "no":'yes'} style={{marginTop:marg}} >
					<div  className={clicked||clicked2||clicked3?'eventzoff100':'eventzon100'} >
					<div className={clicked||clicked2||clicked3?'secondofffirst':'secondon'}>
					<div className='setting' >
						
						<center>
						<MediaQuery minWidth={700}>
						<ul  className="firstpagelist">
							<li ><div style={elemStyle} id = "online" onClick={()=> {this.setState({clicked:true,eventcarou:0,animstop:false,animstop1:false})}} >
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							{/* <div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text" style={{paddingTop:'5px'}}>ONLINE</h1></center>
							</div> */}
							</div></li>
							<li><div style={elemStyleoff} id = 'offline' onClick={()=> {this.setState({clicked2:true,eventcaroone:0,animstop:false,animstop1:false})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							{/* <div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text" style={{paddingTop:'5px'}}>OFFLINE</h1></center>
							</div> */}
							</div></li>
							{/* <li><div style={elemStyle} id = 'talks' onClick={()=> {this.setState({clicked3:true,eventcartwo:0,animstop:false})}}>
							<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
							<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
								<center><h1  id="text" style={{paddingTop:'5px'}}>TALKS</h1></center>
							</div>
							</div></li> */}
						</ul>
						</MediaQuery>
						<MediaQuery maxWidth={700}>
							<ul  className="firstpagelist">
								<li ><div style={elemStylemed} id = "online" onClick={()=> {this.setState({clicked:true,eventcarou:0,animstop:false,animstop1:false})}} >
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								{/* <div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1  id="text" style={{paddingTop:'5px'}}>ONLINE</h1></center>
								</div> */}
								</div></li>
								<li><div style={elemStyleoffmed} id = 'offline' onClick={()=> {this.setState({clicked2:true,eventcaroone:0,animstop:false,animstop1:false})}}>
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								{/* <div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1  id="text" style={{paddingTop:'5px'}}>OFFLINE</h1></center>
								</div> */}
								</div></li>
								{/* <li><div style={elemStyle} id = 'talks' onClick={()=> {this.setState({clicked3:true,eventcartwo:0,animstop:false})}}>
								<img src="./border1.png" style={{width:'163%',marginLeft:"-26.5%",marginTop:'-20%'}}></img>
								<div style={{width:'100%',height:"18%",backgroundColor:"black",marginTop:"-68%",marginLeft:'1%',backgroundColor:'#643434'}}>
									<center><h1  id="text" style={{paddingTop:'5px'}}>TALKS</h1></center>
								</div>
								</div></li> */}
							</ul>
							

						</MediaQuery>
						</center>
						<br></br>
						<br></br>
						<center>
						{/* <img src={im4}  className="events-rb first"></img>  */}
						<a href="https://drive.google.com/file/d/1nwTWWTokmhP16mURLwLM6jnAXLiVFzZd/view?usp=sharing" target="_blank">
						<MediaQuery minWidth={700}>
						<div className='buttondiv' style={{display:"block",cursor:'pointer',marginTop:'-20px',marginLeft:'-80px'}} >
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</MediaQuery>
						<MediaQuery maxWidth={700}>
						<div className='buttondiv' style={{display:"block",cursor:'pointer',marginTop:'0px',marginLeft:'-5px'}} >
							<img src={im4}  className="buttonimg"></img> 
						</div>
						</MediaQuery>
						</a>
						</center>
					</div>
					</div>
					</div>
					</div>
					<div   className={clicked?'eventzon10':'eventzoff10'}>
					{/* <div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'secondoff1':'secondon'}> */}
					
					<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'eventzoff1':'eventzon1'}>
					<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine?'secondoff':'secondon'}>
					<div className={clicked2||clicked3||clicked?'secondon':'secondoff'}>
					<div className={clicked2||clicked3?'secondoff':'secondon'}>
					
					<center>
							<div id='blur'>
								<br></br>
								<img draggable='false'  id='close' src='./exit.png'   onClick={()=> this.setState({clicked:false})}></img>
									<h1 id='online-heading'>ONLINE EVENTS</h1>
									
								<ul className="nav-dots1aft" id="js-dots" style={{marginTop:'0.8%'}}>
								<li className={eventcarou==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:0,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)} }></li>
								<li className={eventcarou==1?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:1,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								<li className={eventcarou==2?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:2,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								<li className={eventcarou==3?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcarou:3,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section'>
								<section className={eventcarou==0?"section is-active transition":"section transition"}   id="section1">
								
									<ul id="list" >
									<li ><div className='event'   onClick={()=>{ this.setState({clickedtwo:true});this.setState({eveno:0})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[0].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwo:true});this.setState({eveno:1})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[1].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventthree:true});this.setState({eveno:2})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[2].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfour:true});this.setState({eveno:3})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[3].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfive:true});this.setState({eveno:4})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[4].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsix:true});this.setState({eveno:5})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[5].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventseven:true});this.setState({eveno:6})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[6].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeight:true});this.setState({eveno:7})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[7].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnine:true});this.setState({eveno:8})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[8].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcarou==3?"section is-active3 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventseven:true});this.setState({eveno:9})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[9].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsix:true});this.setState({eveno:15})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[15].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					
					</div>
					<div   className={clicked2?'eventzon10':'eventzoff10'}>
					{/* <div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'secondoff1':'secondon'}> */}
					
					<div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'eventzoff1':'eventzon1'}>
					<div className={clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff?'secondoff':'secondon'}>
					<div className={clicked||clicked3||clicked2?'secondon':'secondoff'}>
					<div className={clicked||clicked3?'secondoff':'secondon'}>
					
					<center>
							<div id='blur' >
								<br></br>
								<img draggable='false' id='close' src='./exit.png'   onClick={()=> this.setState({clicked2:false})}></img>
									<h1 id='online-heading'>OFFLINE EVENTS</h1>
									
								<ul className="nav-dots2aft" id="js-dots2" style={{marginTop:'0.8%'}}>
								<li className={eventcaroone==0?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:0,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								<li className={eventcaroone==1?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:1,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								<li className={eventcaroone==2?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:2,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								<li className={eventcaroone==3?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:3,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li>
								{/* <li className={eventcaroone==4?"nav-dot is-active":"nav-dot"} onClick={()=> {this.setState({eventcaroone:4,reset:true,animstop1:true});setTimeout(()=>{willstop();},6000)}} ></li> */}
								
								</ul>
	
								<main className="main" id = 'js-section2'>
								<section className={eventcaroone==0?"section is-active transition":"section transition"} id="section1">
								
									<ul id="list" >
									<li ><div className='event'   onClick={()=> {this.setState({clickedtwooff:true});this.setState({eveno:10})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[10].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwooff:true});this.setState({eveno:11})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[11].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventthreeoff:true});this.setState({eveno:12})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[12].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfouroff:true});this.setState({eveno:13})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[13].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfiveoff:true});this.setState({eveno:14})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[14].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									{/* <li><div className='event'   onClick={()=> {this.setState({eventsixoff:true});this.setState({eveno:15})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[15].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li> */}
									<li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:16})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[16].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									{/* <li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:16})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[16].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li> */}
									<li><div className='event'   onClick={()=> {this.setState({eventeightoff:true});this.setState({eveno:17})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[17].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnineoff:true});this.setState({eveno:18})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[18].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:22})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[22].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcaroone==3?"section is-active3 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'  onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:19})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[19].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									{/* <li><div className='event'   onClick={()=> {this.setState({eventeightoff:true});this.setState({eveno:20})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[20].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventnineoff:true});this.setState({eveno:21})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}} >
									<img draggable='false'  src={listData[21].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li> */}
								</ul>
								</section>
								{/* <section className={eventcaroone==4?"section is-active4 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventsevenoff:true});this.setState({eveno:22})}} onMouseOver={()=>{this.setState({animstop:true})}} onMouseOut={()=>{this.setState({animstop:false})}}  >
									<img draggable='false'  src={listData[22].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									
								</ul>
								</section> */}
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					<div >
					
					</div>
					</div>
					{/* <div  className={clicked3?'eventzon10':'eventzoff10'}> */}
					{/* <div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondoff1':'secondon'}> */}
					{/* <div className={clicked||clicked2||clicked3?'secondon':'secondoff'}>
					<div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'eventzoff1':'eventzon1'}>
					<div className={'eventzon1'}>
					<div className={clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'secondoff':'secondon'}>
					
					<div className={clicked||clicked2?'secondoff':'secondon'}>
					
					<center>
							<div id='blur' >
								<br></br>
								<img draggable='false' id='close' src='./exit.png'   onClick={()=> this.setState({clicked3:false})}></img>
									<h1 id='online-heading'>TALKS</h1>
									
								<ul className="nav-dots" id="js-dots3" style={{marginTop:'0.8%'}}>
								<li className={eventcartwo==0?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:0,reset:true})} ></li>
								<li className={eventcartwo==1?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:1,reset:true})} ></li>
								<li className={eventcartwo==2?"nav-dot is-active":"nav-dot"} onClick={()=> this.setState({eventcartwo:2,reset:true})} ></li>
								
								</ul>
	
								<main className="main" id = 'js-section3'>
								<section className={eventcartwo==0?"section is-active transition":"section transition"} id="section1">
								
									<ul id="list" >
									<li ><div className='event'   onClick={()=> {this.setState({clickedtwotal:true});this.setState({eveno:18})}} >
									<img draggable='false'  src={listData[18].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventtwotal:true});this.setState({eveno:19})}} >
									<img draggable='false'  src={listData[19].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'  onClick={()=> {this.setState({eventthreetal:true});this.setState({eveno:20})}} >
									<img draggable='false'  src={listData[20].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==1?"section is-active1 transition":"section transition"} id="section2">
								
									<ul id="list1" >
									<li ><div className='event'   onClick={()=> {this.setState({eventfourtal:true});this.setState({eveno:21})}} >
									<img draggable='false'  src={listData[21].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventfivetal:true});this.setState({eveno:22})}} >
									<img draggable='false'  src={listData[22].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventsixtal:true});this.setState({eveno:23})}} >
									<img draggable='false'  src={listData[23].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								<section className={eventcartwo==2?"section is-active2 transition":"section transition"} id="section3">
								
									<ul id="list2" >
									<li ><div className='event'   onClick={()=> {this.setState({eventsevental:true});this.setState({eveno:24})}}  >
									<img draggable='false'  src={listData[24].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventeighttal:true});this.setState({eveno:25})}} >
									<img draggable='false'  src={listData[25].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
									<li><div className='event'   onClick={()=> {this.setState({eventninetal:true});this.setState({eveno:26})}} >
									<img draggable='false'  src={listData[26].source} style={{width:'105%',marginLeft:"-0%",marginTop:'-3%'}}></img>
									<img draggable='false'  src='./border1.png' style={{width:'167%',marginLeft:"-26%",marginTop:'-125%'}}></img>
									
									</div></li>
								</ul>
								</section>
								
								</main>
	
							</div>
							</center>
					</div>
					</div>
					</div>
					</div>
					</div>
					{/* </div> */}
	
	
					{/* <div >
					
					</div>
					</div>  */}

					<div id='landpage'  >
					
					
						<div className={clickedtwo||eventtwo||eventthree||eventfour||eventfive||eventsix||eventseven||eventeight||eventnine||clickedtwooff||eventtwooff||eventthreeoff||eventfouroff||eventfiveoff||eventsixoff||eventsevenoff||eventeightoff||eventnineoff||clickedtwotal||eventtwotal||eventthreetal||eventfourtal||eventfivetal||eventsixtal||eventsevental||eventeighttal||eventninetal?'eventzon':'eventzoff'}>
						
						<Eventcard  data={listData[eveno]} userdata={this.props.userdata} success_createteam ={this.props.success_createteam} success_jointeam = {this.props.success_jointeam} success_regevent = {this.props.success_regevent} success_indregevent = {this.props.success_indregevent} error = {this.props.error} error_general ={this.props.error_general} setUserdata={this.props.setUserdata} islogin = {this.props.islogin} notlogin = {this.props.notlogin}exiting={()=>{

								this.setState({clickedtwo :false});
								this.setState({eventtwo :false});
								this.setState({eventthree :false});
								this.setState({eventfour: false});
								this.setState({eventfive :false});
								this.setState({eventsix :false});
								this.setState({eventseven :false});
								this.setState({eventeight :false});
								this.setState({eventnine :false});
								this.setState({clickedtwooff :false});
								this.setState({eventtwooff :false});
								this.setState({eventthreeoff :false});
								this.setState({eventfouroff: false});
								this.setState({eventfiveoff :false});
								this.setState({eventsixoff :false});
								this.setState({eventsevenoff :false});
								this.setState({eventeightoff :false});
								this.setState({eventnineoff :false});
								this.setState({clickedtwotal :false});
								this.setState({eventtwotal :false});
								this.setState({eventthreetal :false});
								this.setState({eventfourtal: false});
								this.setState({eventfivetal :false});
								this.setState({eventsixtal :false});
								this.setState({eventsevental :false});
								this.setState({eventeighttal :false});
								this.setState({eventninetal :false});
								
						}}/>
						</div>
					</div>
					
					</div>
				</div>
				

				


				
			 
				
				
			// </div>
	
			
		);
	}
	
}	






export default Events;
