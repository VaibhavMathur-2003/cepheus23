
import './Sponsors.css';
import React, {useState, useRef, useEffect} from "react";



const sponsors_data=[
	{
	name:'',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429916/cepheus23_posters/sponsors/State_Bank_of_India.svg_fcglpj.png',
	web:'https://sbi.co.in/',
	role:'TITLE SPONSOR',
	},
	{
	name:'HPCL',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429916/cepheus23_posters/sponsors/Hindustan_Petroleum_Logo.svg_b7mmo6.png',
	web:'https://www.hindustanpetroleum.com/',
	role:'CO SPONSOR',
	},
	{
	name:'ATHER ENERGY',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429915/cepheus23_posters/sponsors/ather_svbwai.png',
	web:'https://www.atherenergy.com/',
	role:'CO SPONSOR',
	},
	{
	name:'SBI',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429916/cepheus23_posters/sponsors/State_Bank_of_India.svg_fcglpj.png',
	web:'https://sbi.co.in/',
	role:'CO SPONSOR',
	},
	{
	name:'GOA GOVERNMENT(IT DEPARTMENT)',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429877/cepheus23_posters/sponsors/goa_it_department_wln0f6.jpg',
	web:'https://www.dit.goa.gov.in/',
	role:'PARTNER',
	},
	{
	name:'IMS LEARNING',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429877/cepheus23_posters/sponsors/ims_learning_y0saoj.jpg',
	web:'https://www.imsindia.com/center/goa/',
	role:'EDUCATION PARTNER',
	},
	{
	name:'INTRAINZ',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429877/cepheus23_posters/sponsors/intrainz_z3wyv3.jpg',
	web:'https://intrainz.com/',
	role:'EDUCATION PARTNER',
	},
	{
	name:'RED BULL',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429879/cepheus23_posters/sponsors/redbull_lfmzx5.jpg',
	web:'https://www.redbull.com/in-en/',
	role:'EXPERENTIAL PARTNER',
	},
	{
	name:'LKAY',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429878/cepheus23_posters/sponsors/lkay_djw072.jpg',
	web:'#',
	role:'FOOD PARTNER',
	},
	{
	name:'LEVELUP GAMING',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429878/cepheus23_posters/sponsors/levelup_toqs53.jpg',
	web:'https://www.levelupgaming.ca/',
	role:'GAMING PARTNER',
	},
	{
	name:'WHITE HEAVEN ENTERTAINMENTS',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429879/cepheus23_posters/sponsors/white_heavens_lfepaz.jpg',
	web:'https://whiteheavenentertainments.in/',
	role:'MUSIC PARTNER',
	},
	{
	name:'INNOVIANS TECHNOLOGY',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429877/cepheus23_posters/sponsors/innovians_tech_valxef.jpg',
	web:'https://innovianstechnologies.com/',
	role:'SUMMERTRAINING PARTNER',
	},
	{
	name:'STOCKGRO',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429878/cepheus23_posters/sponsors/stockgro_gljegn.jpg',
	web:'https://www.stockgro.club/',
	role:'EVENT PARTNER',
	},
	{
	name:'STATWIG',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429878/cepheus23_posters/sponsors/statwig_o7cepy.jpg',
	web:'https://statwig.com/',
	role:'EVENT SPONSOR',
	},
	{
	name:'OSSEB',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429878/cepheus23_posters/sponsors/osseb_m8xanr.jpg',
	web:'https://osseb.com/',
	role:'EVENT SPONSOR',
	},
	{
	name:'YOUTH INCORPORATED',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429879/cepheus23_posters/sponsors/youth_incorporated_zgcihu.jpg',
	web:'https://youthincmag.com/',
	role:'MEDIA PARTNER',
	},
	{
	name:'ELITE UNIFAB',
	imsrc:'https://res.cloudinary.com/dntbu3vhr/image/upload/c_scale,q_auto:eco,w_240/v1675429877/cepheus23_posters/sponsors/elite_unifab_oujquu.jpg',
	web:'#',
	role:'MERCHANDISE SPONSOR',
	},

]





















function App() {
	const [animate, setAnimate] = useState(false);
	const targetRef = useRef(null);

	useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					const [entry] = entries;
			if(entry.isIntersecting){
			setAnimate(entry.isIntersecting);
			}
				},
				{ root: null, rootMargin: '0px', threshold: 0.1 }
			);
			const target = targetRef.current;
			if (target) observer.observe(target);
			return () => {
				if (target) observer.unobserve(target);
			};
		}, [targetRef]);


	return (
		<div className="Sponsors" id="Sponsors" ref={targetRef}>
			<div className="events-bg1" >
				{/* <br></br> */}
				{/* <br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br> */}
				<h1 className='myStyl'>Sponsors</h1>
				<br></br>
				<br></br>
				<br></br>
				{/* <br></br>
				<br></br>
				<br></br> */}
				<center>
				<div >
				<div id='box' style={{marginBottom:'50px'}} className={animate ? 'sps animate' : 'sps'} >
					<center>
					<div>
					<div>
					{/* <br></br> */}
					{/* <br></br> */}
					<div id='container_main'  >
						
							
							<a href={sponsors_data[2].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[2].role}</h2>
							<img src={sponsors_data[2].imsrc} id='img_spon_2' ></img>
							</div>
							</a>
							{/* <a href={sponsors_data[0].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon_title'></img>
							<h2 id='heading_box_mai' className='imp imp2' style={{textDecoration:'none'}}>{sponsors_data[0].role}</h2>
							<img src={sponsors_data[0].imsrc} id='img_spon' ></img>
							</div>
							</a> */}
							<a href={sponsors_data[1].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[1].role}</h2>
							<img src={sponsors_data[1].imsrc} id='img_spon_1' ></img>
							</div>
							</a>
							<a href={sponsors_data[3].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[3].role}</h2>
							<img src={sponsors_data[3].imsrc} id='img_spon_1_ne'></img>
							</div>
							</a>
							
						</div>
						</div>
					<div>
					{/* <br></br> */}
					{/* <br></br> */}
					<div id='container_main_dupe'  >
						
							
							
							
							<a href={sponsors_data[4].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box_mai' className='imp' style={{textDecoration:'none'}}>{sponsors_data[4].role}</h2>
							<img src={sponsors_data[4].imsrc} id='img_spon_1_ne_it'></img>
							</div>
							</a>
							<a href={sponsors_data[15].web} target="_blank">
							<div id='adj' >
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[15].role}</h2>
							<img src={sponsors_data[15].imsrc} id='img_spon_ne_eu'></img>
							</div>
							</a>
							<a href={sponsors_data[5].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[5].role}</h2>
							<img src={sponsors_data[5].imsrc} id='img_spon_1_ne_ims'></img>
							</div>
							</a>
							
							
							
						</div>
						</div>
						<div>
						{/* <br></br> */}
						{/* <br></br> */}
						<div id='mob_2' >
							{/* <a href={sponsors_data[0].web} target="_blank">
							<div id='container_main_2' style={{marginBottom:'100px'}}>
							<div>
							
							<img src='./box_sponsors.png' id='box_spon_title'></img>
							<h2 id='heading_box_mai' className='imp imp2' style={{textDecoration:'none'}}>{sponsors_data[0].role}</h2>
							<img src={sponsors_data[0].imsrc} id='img_spon_2_mo' ></img>
							
							</div>
							</div>
							</a> */}
							<div id='container_main_3'>
							
							<a href={sponsors_data[1].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[1].role}</h2>
							<img src={sponsors_data[1].imsrc} id='img_spon_mo' ></img>
							
							</div>
							</div>
							</a>
							<a href={sponsors_data[2].web} target="_blank">
							<div id='container_main_2'>
							<div>
							{/* <div> */}
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[2].role}</h2>
							<img src={sponsors_data[2].imsrc} id='img_spon_1_mo' ></img>
							{/* <h2 id='heading_box'>TITLE SPONSOR</h2> */}
							{/* </div> */}
							</div>
							</div>
							</a>
							<a href={sponsors_data[3].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[3].role}</h2>
							<img src={sponsors_data[3].imsrc} id='img_spon_1_ne_ne' ></img>
							
							</div>
							</div>
							</a>
							</div>
						</div>
						</div>
						<div>
							{/* <br></br> */}
							<br></br>
						<div id='mob_2' >
							
							<div id='container_main_3'>
							
							
							<a href={sponsors_data[4].web} target="_blank">
							<div id='container_main_2'>
							
							<div>
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box_mai' className='imp' style={{textDecoration:'none'}}>{sponsors_data[4].role}</h2>
							<img src={sponsors_data[4].imsrc} id='img_spon_1_ne_ne' ></img>
							
							</div>
							</div>
							</a>
							<a href={sponsors_data[15].web} target="_blank">
							<div id='container_main_2' >
							<div>
							{/* <div> */}
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[15].role}</h2>
							<img src={sponsors_data[15].imsrc} id='img_spon_ne_eu' ></img>
							{/* <h2 id='heading_box'>TITLE SPONSOR</h2> */}
							{/* </div> */}
							</div>
							</div>
							</a>
							
							<a href={sponsors_data[5].web} target="_blank">
							<div id='container_main_2'>
							<div>
							{/* <div> */}
							<img src='./box_sponsors.png' id='box_spon_sec'></img>
							<h2 id='heading_box' className='imp' style={{textDecoration:'none'}}>{sponsors_data[5].role}</h2>
							<img src={sponsors_data[5].imsrc} id='img_spon_1_ne' ></img>
							{/* <h2 id='heading_box'>TITLE SPONSOR</h2> */}
							{/* </div> */}
							</div>
							</div>
							</a>
							
							
							
							</div>
							{/* <br></br> */}
							{/* <br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br> */}
						</div>
						
						</div>
						<div>
						<br></br>
						<br></br>
						
						<div  id='container1' >
							<a href={sponsors_data[6].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[6].role}</h2>
							<img src={sponsors_data[6].imsrc} id='img_spon_6'></img>
							</div>
							</a>
							{/* <a href={sponsors_data[7].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[7].role}</h2>
							<img src={sponsors_data[7].imsrc} id='img_spon_3_ne'></img>
							</div>
							</a> */}
							<a href={sponsors_data[8].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[8].role}</h2>
							<img src={sponsors_data[8].imsrc} id='img_spon_4'></img>
							</div>
							</a>
							
							<a href={sponsors_data[9].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[9].role}</h2>
							<img src={sponsors_data[9].imsrc} id='img_spon_5'></img>
							</div>
							</a>
							
						</div>
						</div>
						<div>
						{/* <br></br> */}
						{/* <br></br> */}
						<div id='container2' >
							
							<a href={sponsors_data[10].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[10].role}</h2>
							<img src={sponsors_data[10].imsrc} id='img_spon_7'></img>
							</div>
							</a>
							<a href={sponsors_data[11].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[11].role}</h2>
							<img src={sponsors_data[11].imsrc} id='img_spon_3_nef'></img>
							</div>
							</a>
							<a href={sponsors_data[12].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[12].role}</h2>
							<img src={sponsors_data[12].imsrc} id='img_spon_4_nef'></img>
							</div>
							</a>
							
							<a href={sponsors_data[13].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[13].role}</h2>
							<img src={sponsors_data[13].imsrc} id='img_spon_5'></img>
							</div>
							</a>
						</div>
						</div>
						<div>
						{/* <br></br> */}
						{/* <br></br> */}
						<div id='container2' >
							
							<a href={sponsors_data[14].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[14].role}</h2>
							<img src={sponsors_data[14].imsrc} id='img_spon_7_nef'></img>
							</div>
							</a>
							{/* <a href={sponsors_data[15].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[15].role}</h2>
							<img src={sponsors_data[15].imsrc} id='img_spon_8_nef'></img>
							</div>
							</a> */}
							<a href={sponsors_data[16].web} target="_blank">
							<div>
							<img src='./box_sponsors.png' id='box_spon'></img>
							<h2 id='heading_box' className='adjust' style={{textDecoration:'none'}}>{sponsors_data[16].role}</h2>
							<img src={sponsors_data[16].imsrc} id='img_spon_9_nef'></img>
							</div>
							</a>
							
						</div>
						</div>
					</div>
					</center>
				</div>
				</div>
				</center>

				
			</div>
		</div>
	);
}

export default App;
