import React, {useState, useRef, useEffect} from "react";
// import "./About.css";
// import MediaQuery from 'react-responsive';
import './index.css';

function About() {

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
    <div className="aboutus" id="About"  ref={targetRef}>
      <center>
        <div className='myStyleh1'>About Us</div>
        <div className={animate ? 'parent-text animate' : 'parent-text'}>
          <div className="text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            IIT Goa, only seven years into its inception has grown to be a highly sought-after institution for engineering aspirants throughout the country, nestled into the vast and beautiful campus of GEC in Farmagudi with a vibrant population of over three thousand students and five hundred faculty members.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            With Cepheus, we strive to promote and foster technical spirit within the young and imaginative minds of students while also representing the rich and unique culture of Goa, which will be evident in the fest’s various subtleties.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Cepheus is a celebration of our technical prowess - not just as an institution, but as a country. We aim at instilling a sense of collective learning by creating a melting pot of ideas open to students of all institutions and disciplines. With intriguing events and competitions, along with resourceful workshops by experts and professionals, we hope to make Cepheus ‘23 a memorable experience for all.
          </div>
        </div>
      </center>
    </div>
  );
}
export default About;
