// import React from "react";
import React, {useState, useRef, useEffect} from "react";
import "./Schedule.css";



export default function Schedule() {
  const [animate, setAnimate] = useState(false);
	const targetRef = useRef(null);

  useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
        // setAnimate(entry.isIntersecting);

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
    <>
      <div className="schedule" id="Schedule" >
        <div className="scheduleHead">Schedule</div>
        <div className="scheduleCards"  ref={targetRef}>
          <div className={animate ? "scheduleCard feb8 animate" : "scheduleCard feb8"}>
            <p className="schedule-date">8 February</p>
            <div className="schedule-list">
                <ul style={{width: 'fit-content'}}>
                  <li className="schedule-list-item">Rule The Market - 10:00 AM</li> 
                  <li className="schedule-list-item">Hackoverflow - 1:00 PM</li> 
                  <li className="schedule-list-item">CTF - 9:00 PM</li> 
                  <li className="schedule-list-item">Bridge Building - 9:00 PM</li> 
                  <li className="schedule-list-item">Copy The Nature - 1st Feb</li>
                </ul>
            </div>
          </div>
          <div className={animate ? "scheduleCard feb9 animate" : "scheduleCard feb9"}>
            <p className="schedule-date">9 February</p>
            <div className="schedule-list">
                <ul style={{width: 'fit-content'}}>
                <li className="schedule-list-item">Circuital Dilemma - 6:00 PM</li>
                <li className="schedule-list-item">Fizzbuzz - 7:00 PM</li>
                <li className="schedule-list-item">Data Science Hackathon - 9:00 PM</li>
                <li className="schedule-list-item">Lorem Ipsum - 9:00 PM</li>
                <li className="schedule-list-item">E-Bike Competition</li>
                </ul>
            </div>
          </div>
          <div className={animate ? "scheduleCard feb10 animate" : "scheduleCard feb10"} >
            <p className="schedule-date">10 February</p>
            <div className="schedule-list">
                <ul>
                  <li className="schedule-list-item">Scratch Competition -	10:00 AM</li>
                  <li className="schedule-list-item">Arduino's Trial -	10:00 AM</li>
                  <li className="schedule-list-item">KBC Quiz - 3:00 PM</li>
                  <li className="schedule-list-item">Online Treasure Hunt - 4:00 PM</li>
                  <li className="schedule-list-item">HacktheGames - 6:00 PM</li>
                </ul>
            </div>
          </div>
          <div className={animate ? "scheduleCard feb11 animate" : "scheduleCard feb11"} >
            <p className="schedule-date">11 February</p>
            <div className="schedule-list">
                <ul>
                  <li className="schedule-list-item">Buy My Code - 11:00 AM</li>
                  <li className="schedule-list-item">Maze Amaze - 12:00 PM</li>
                  <li className="schedule-list-item">Treasure Hunt - 4:00 PM</li>
                </ul>
            </div>
          </div>
          <div className={animate ? "scheduleCard feb12 animate" : "scheduleCard feb12"} >
            <p className="schedule-date">12 February</p>
            <div className="schedule-list">
                <ul>
                  <li className="schedule-list-item">Pare It Down - 11:00 AM</li>
                  <li className="schedule-list-item">Launch Galaset - 11:00 AM</li>
                  <li className="schedule-list-item">Game Theory Event - 3:00 PM</li>
                </ul>
            </div>
          </div>
        </div>
        
        {/* <div style={{ position: "relative" }}>
          <div className="scheduleDates">
            <div className="feb8">
              <img className="polygon" src={polygon} alt="" width="10px" />
              <div
                className="feb"
                data-hover={
                    <ul>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                    <li>ABC</li>
                  </ul>
                }
                data-before="February 8"
              ></div>
            </div>
            <div className="feb9">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 9"
              ></div>
            </div>
            <div className="feb10">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 10"
              ></div>
            </div>
            <div className="feb11">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 11"
              ></div>
            </div>
            <div className="feb12">
              <img className="polygon" src={polygon} alt="" />
              <div
                className="feb"
                data-hover="kldsjfadjbfasmdfbasjdfakjbdfajkdbfaabfjsaddbfaksdjbfjsdnbfaskjdbf"
                data-before="February 12"
              ></div>
            </div> */}
          {/* </div>
        </div> */}
      </div>
    </>
  );
}
