import React from "react";
import { GrFacebookOption, GrTwitter, GrGooglePlus } from "react-icons/gr";
import NavBar from "../components/NavBar";
import Bg from "../assets/Contact/contact-image.jpg";

const Contact = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
      <NavBar />
      <div
        style={divStyle}
        className="w-full bg-center bg-cover shadow-md snap-center rounded-xl shadow-black/20"
      >
        <div className="lg:px-[300px] min-[320px]:text-center max-[600px]:bg-black">
          <label className="text-zinc-900 lg:text-[285px] md:text-zinc-900">
            <b>hello</b>
          </label>
        </div>

        <div className="w-full lg:px-[680px] pb-[25px]">
          <p className="text-justify text-white whitespace-nowrap">
            my name is Ludmil Avelino.
            <br />
            and I am currently watching
            <br /> a series called Breaking bad
            <br />
            <br />
            you can reach me on:
            <br /> <a href="tel:+27842368752">tel: 0842368752</a>
            <br />
            <a href="mailto:ludmilpaulo@gmail.com">
              email: ludmilpaulo@gmail.com
            </a>
            <br />
            <br />
            <div className="flex justify-start gap-6 ...">
              <div>share:</div>
              <div>
                <a href="https://www.facebook.com/ludmilpaulo">
                  <GrFacebookOption className="w-6 h-6 text-white" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/ludmilpaulo">
                  <GrTwitter className="w-6 h-6 text-white" />
                </a>
              </div>
              <div>
                <a href="https://www.ludmilpaulo.com/">
                  <GrGooglePlus className="w-6 h-6 text-white" />
                </a>
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
  marginLeft: "180px",
  //paddingleft:"4" ,
  width: "41vw",
  height: "100vh",
  backgroundImage: "url(" + Bg + ")",
};

export default Contact;
