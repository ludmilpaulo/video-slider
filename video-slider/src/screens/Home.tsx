import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import NavBar from "../components/NavBar";
import { data } from "../RawData";

//******************defining the type of data to be received *******************************
interface Type {
  id: number;
  img: string;
  video: string;
  title: string;
  subtitle: string;
}
//**************************************************************************************** */

const Home = () => {
  const [hoverData] = useState<Type[]>(data); //set the Array in the state to be consumed 
  const [active, setActive] = useState(-1); // Variable to set the active hovered element 

//**********Function to turn element that is not hover dark */
  const getHoveItem = (index: number) => {
    if (active > -1 && index !== active) return "bg-black opacity-5 ...";
    return "";
  };

  //************************************************************ */

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-scroll bg-black">
      
      <NavBar></NavBar>

      <div className="relative flex items-center pt-16">
        <div
          id="slider"
          className={`lg:flex w-full h-full overflow-x-scroll hover:snap-x scroll pb-[55px] overflow-y-auto whitespace-nowrap scroll-smooth md:scroll-auto md:max-lg:flex
          ${active ? "active" : ""}`}
        >
          {hoverData.map((item, index) => (
            <div className="min-w-[80%] md:min-w-[40%] md:scrollbar-default ">
              <div
                className={`w-full h-full snap-center md:snap-start ${ getHoveItem(
                  index
                )}`}
                key={index}
                onMouseOver={() => {
                  setActive(index);
                }}
                onMouseOut={() => {
                  setActive(-1);
                }}
              >
                <HoverVideoPlayer
                  videoSrc={item.video}
                  pausedOverlay={
                    <img
                      className="w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"
                      src={item.img}
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
                <div className="text-justify text-white whitespace-nowrap">
                  <br/>
                  <h2>{item.title}</h2>

                  <h3 className="text-zinc-500">{item.subtitle}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
