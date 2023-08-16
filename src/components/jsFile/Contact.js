import React from "react";
import "../cssFile/Contact.css";
import location from "../Assets/placeholder.png";
import contact from "../Assets/receiver.png";
import email from "../Assets/email.png";

const Contact = () => {
  return (
    <main className={"profile1"}>
      <main className={"authCont1"} style={{color:"black"}}>
        <div className={"contactBox"}>
          <img src={location} alt="location" className={"icon"} />
          <h4 >OUR MAIN OFFICE</h4>
          <p >
            AAKASH METAL WORKS 108,Chandanpura ,Kopaganj <br/> Mau-275305, U.P. 
          </p>
        </div>

        <div className={"contactBox"}>
          <img src={contact} alt="location" className={"icon"} />
          <h4>PHONE NUMBER</h4>
          <p>
            7275291510 <br/>9936098290
          </p>
        </div>

        <div className={"contactBox"}>
          <img src={email} alt="location" className={"icon"} />
          <h4>EMAIL</h4>
          <p style={{textDecoration: "underline"}}> aakashmetalworks@gmail.com<br /> amw.aakashmetal@gmail.com</p>
        </div>
      </main>
      <main className={"authCont"}>
        <section>
          <p className={"ContHeader"}>Contact Us</p>
          <form>
            <div className={"control"}>
              {/* <label htmlFor='name'>Name <span style={{color:"red"}}>*</span></label> */}
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name..."
              />
            </div>
            <div className={"control"}>
              {/* <label htmlFor='contact'>Mobile <span style={{color:"red"}}>*</span></label> */}
              <input
                type="tel"
                id="contact"
                required
                placeholder="Enter a valid mobile no..."
              />
            </div>
            <div className={"control"}>
              {/* <label htmlFor='message'>Message</label> */}
              <textarea
              className="textAreaWidth"
                name="message"
                id="message"
                // cols="62"
                rows="3"
                placeholder="Please write your query..."
              ></textarea>
            </div>
            <button className={"btn"}>Submit Now</button>
          </form>
        </section>
      </main>
    </main>
  );
};

export default Contact;

//onClick={ () => props.onLogIn()}
