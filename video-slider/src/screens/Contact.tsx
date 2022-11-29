import React from "react";
import NavBar from "../components/NavBar";
import Bg from "../assets/Contact/contact-image.jpg"

const Contact = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
      <NavBar />
      <div style={divStyle}
      className="w-full bg-center bg-cover shadow-md snap-center rounded-xl shadow-black/20"
      >
        <div className="pl-32 ml-64 pt-60 px-18">
        <p className="text-gray-600 text-[300px] md:text-gray-600"><b>hello</b></p>
        </div>

      </div>
    </div>
  );
};

const divStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: '180px',
    //paddingleft:"4" ,
    width: "41vw",
    height: "100vh",
    backgroundImage: "url(" + Bg + ")",
  };

export default Contact;
