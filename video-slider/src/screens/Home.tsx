import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NavBar from "../components/NavBar";
import { data } from "../RawData";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    console.log("pegou");
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-auto bg-black">
      <NavBar></NavBar>

      <div className="relative flex items-center pt-16">
        <div
          id="slider"
          className="lg:flex w-full h-full overflow-x-scroll hover:snap-x scroll pb-5 overflow-y-auto whitespace-nowrap scroll-smooth md:scroll-auto md:max-lg:flex"
          onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
        >
          {data.map((item, index) => (
            <div className="min-w-[80%] md:min-w-[40%] md:scrollbar-default ">
              <div
                className="w-full h-full snap-center md:snap-start"
                key={index}
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
					
								<h2>{item.title}</h2>
					
							<h3>{item.subtitle}</h3>
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
