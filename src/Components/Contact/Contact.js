import React, {useState, useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./Contact.css";
import MainCard from "./MainCard";
import SideCard from "./SideCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const contactDetails = [
  {
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "6263498532",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263732/chepheus/Srajan_Chourasia-Overall_Coordinator-6263498532_kmulj1.webp"
  },
  {
    name: "Atharva Bhanage",
    role: "Coordinator",
    email: "atharva.bhanage.20042@iitgoa.ac.in",
    phone: "8074292759",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263710/chepheus/Atharva-Coordinator-8074292759_di3mex.webp"
  },
  {
    name: "Yuvraj Nagar",
    role: "Coordinator",
    email: "yuvraj.nagar.20031@iitgoa.ac.in",
    phone: "9770594125",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673264740/chepheus/Yuvraj_ckifao.webp"
  },
  {
    name: "Aniket Chaudhri",
    role: "Overall Event Manager",
    email: "aniket.chaudhri.20031@iitgoa.ac.in",
    phone: "7087363393",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263711/chepheus/AniketChaudhri-OverallEventManager-7087363393_wutmtw.webp"
  },
  {
    name: "Mulayam",
    role: "Online Event Manager",
    email: "mulayam.21031@iitgoa.ac.in",
    phone: "9817568174",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263746/chepheus/Mulayam-Online_Junior_Event_Manager-9817568174_wdseyh.webp"
  },
  {
    name: "Atharva Bhawasar",
    role: "Offline Event Manager",
    email: "atharva.bhawsar.21063@iitgoa.ac.in",
    phone: "9643204258",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263715/chepheus/Atharva_Bhawsar-Offline_junior_eventmanager-9643204258_i9uav7.webp"
  },
  {
    name: "Kushagra Srivastava",
    role: "Development Head",
    email: "kushagra.srivastava.20042@iitgoa.ac.in",
    phone: "7007432254",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263711/chepheus/KushagraSrivastava_DevelopmentHead_7007432254_zdgupy.webp"
  },
  {
    name: "Neetu",
    role: "Marketing Head",
    email: "neetu.20031@iitgoa.ac.in",
    phone: "6280789636",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263714/chepheus/Neetu-Marketing-6280789636_osaymj.webp"
  },
  {
    name: "Prateek Singhal",
    role: "Sponsorship Head",
    email: "prateek.singhal.20042@iitgoa.ac.in",
    phone: "8529530095",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263714/chepheus/PrateekSinghal_SponsorshipHead_8529530095_h3en9q.webp"
  },
  {
    name: "Ritik Tiwari",
    role: "Social Media Head",
    email: "ritik.tiwari.20042@iitgoa.ac.in",
    phone: "6307907724",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673285384/chepheus/Ritik_Tiwari_Social_Media_Head_6307907724_hxfqyc.webp"
  },
  {
    name: "Shreya yadav",
    role: "Design Head",
    email: "shreya.yadav.20031@iitgoa.ac.in",
    phone: "9431011303",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673264431/chepheus/ShreyaYadav-DesignHead-9431011303_sllh5l.webp"
  },
  {
    name: "Shivam Sinoliya",
    role: "Finance Head",
    email: "shivam.sinoliya.20031@iitgoa.ac.in",
    phone: "9098819578",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263731/chepheus/ShivamSinoliya_FinanceHead_9098819578_dvsh3l.webp"
  },
  {
    name: "Diya Bhagat",
    role: "Decoration Head",
    email: "diya.bhagat.20063@iitgoa.ac.in",
    phone: "8102115698",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673284871/chepheus/DiyaBhagat-DecorationHead-8102115698_1_r80vhu.webp"
  },
  {
    name: "Krishnaveni Unnikrishnan",
    role: "Content Head",
    email: "krishnaveni.unnikrishnan.20063@iitgoa.ac.in",
    phone: "7736017928",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673774228/chepheus/Krishnaveni_Unnikrishnan_ContentHead__7736017928_ptnbqz.webp"
  },
];

export default function Contact() {

  const [displayData, setDisplayData] = useState({
    name: "Srajan Chourasia",
    role: "Overall Coordinator",
    email: "gstechnical@iitgoa.ac.in",
    phone: "6263498532",
    photo: "https://res.cloudinary.com/dhtb16f8u/image/upload/c_scale,q_auto:eco,w_240/v1673263732/chepheus/Srajan_Chourasia-Overall_Coordinator-6263498532_kmulj1.webp"
  });
  const [animate, setAnimate] = useState(false);
	const targetRef = useRef(null);
  const [contactClick, setContactClick] = useState(true);
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

  const handleClick = (i) => {
    setContactClick(false);
    setDisplayData({
      name: contactDetails[i].name,
      role: contactDetails[i].role,
      email: contactDetails[i].email,
      phone: contactDetails[i].phone,
      photo : contactDetails[i].photo,
    })
    setTimeout(() => {setContactClick(true)}, 10);
  }
  return(
    <div class="contact-us" id="Contact"  ref={targetRef}>
      <h1 class="contact-heading">Contact Us</h1>
      <div class="contact-content">
        <div className={animate ? "contact-full-card animate" : "contact-full-card"}>
          {contactClick ? <MainCard data={displayData}/> : null}
        </div>
        <div className={animate ? "contact-carousal animate" : "contact-carousal"}>
          {contactDetails.map((item, i) => {
            return (
              <SideCard key={i} id={i} role={item.role} handleClick={handleClick} photo ={item.photo}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

























// export default function Contact() {
//   return (
//     <div className="contact-us">
//       <h1>Contact</h1>
//       {/* <Card /> */}
//       <div className="contact-first-layer">
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-second-layer">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//       <div className="contact-carousal">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={5}
//           navigation={{ clickable: true }}
//           //   pagination={{ clickable: true }}
//           //   scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             // when window width is >= 480px
//             480: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//             // when window width is >= 640px
//             640: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             900: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//           }}
//           //   loop = {true}
//         >
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>

//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//           <SwiperSlide>
//             <EventCard />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }
