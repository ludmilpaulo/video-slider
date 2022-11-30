import React from "react";
import{ GrFacebookOption, GrTwitter, GrGooglePlus } from 'react-icons/gr';
import NavBar from "../components/NavBar";
import Bg from "../assets/Contact/contact-image.jpg"

const Contact = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
      <NavBar />
      <div style={divStyle}
      className="w-full bg-center bg-cover shadow-md snap-center rounded-xl shadow-black/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 px-[500px] min-[320px]:text-center max-[600px]:bg-black">
        <label className="text-zinc-900 text-[285px] md:text-zinc-900"><b>hello</b></label>
 
        </div>
        
        <div className="w-full px-[900px] pb-[25px]">
        
          <p className="text-justify text-white whitespace-nowrap">my name is Ludmil Avelino.
          <br/>and I am currently watching<br/> a series called Breaking bad<br/><br/>
          you can reach me on:<br/>tel: 0842368752<br/>email: ludmilpaulo@gmail.com<br/><br/>
          <div className="flex justify-start gap-6 ...">
          <div>
          share:
          </div>
          <div>
          <GrFacebookOption className="w-6 h-6 text-white"/>
          </div>
          <div>
          <GrTwitter className="w-6 h-6 text-white"/>
          </div>
          <div>
          <GrGooglePlus className="w-6 h-6 text-white"/>
          </div>
          </div>
          </p>
    
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
