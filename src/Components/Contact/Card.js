import "./Card.css";

export default function Card() {
  return (
    <>
      <div className="contact-card">
        <span className="border-wrap-outer">
          <span className="border-wrap">
            <div className="border-div">
              <div className="contact-card-visible">
                <img
                  src="img/temp.jpeg"
                  alt="user"
                  className="contact-image"
                ></img>
              </div>
            </div>
          </span>
        </span>
        <div className="contact-card-hover">
          <p>Runal Parkar</p>
          <p>Motorsports Head</p>
          <p>1234567890</p>
          <p>abcd.efg@iitgoa.ac.in</p>
        </div>
      </div>
    </>
  );
}
