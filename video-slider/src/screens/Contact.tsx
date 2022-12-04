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
        <div className="container text-gray-800 px-4 md:px-12">
          <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0"></div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6">
                        <label className="text-zinc-900 md:max-lg:text-2xl text-[285px] md:text-zinc-900">
                          <b>hello</b>
                        </label>

                        <div className="w-full pt-80 pb-80 place-self-end">
                          <p className="w-10 text-justify-left text-white whitespace-nowrap md:w-auto lg:w-auto ">
                            my name is Ludmil Avelino.
                            <br />
                            and I am currently watching
                            <br /> a series called Breaking bad
                            <br />
                            <br />
                            you can reach me on:
                            <br />
                            tel: 0842368752
                            <br />
                            email: ludmilpaulo@gmail.com
                            <br />
                            <br />
                            <div className="flex justify-start gap-6 ...">
                              <div>share:</div>
                              <div>
                                <GrFacebookOption className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <GrTwitter className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <GrGooglePlus className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
