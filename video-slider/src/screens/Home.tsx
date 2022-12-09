import React, { useState, useRef } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NavBar from "../components/NavBar";
import { data } from "../RawData";

interface Type{
    id: number;
    img: string;
    video: string;
    title :string;
    subtitle :string;
  
}

const Home = () => {
  const [hoverData] = useState<Type[]>(data);
  const [hoverIndex, setHoverIndex] = useState<Type | null>(null)
  
  const cardClassname = (index: Type | null) => {
    if (index === hoverIndex || hoverIndex == null) 
      return "card text-center";
    else return "card text-center inactive";
  }

 
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-auto bg-black">
      <NavBar></NavBar>

      <div className="relative flex items-center pt-16">
        <div
          id="slider"
          className="lg:flex w-full h-full overflow-x-scroll hover:snap-x scroll pb-5 overflow-y-auto whitespace-nowrap scroll-smooth md:scroll-auto md:max-lg:flex"
        >
          {hoverData.map((item, index) => (
            

            <div className="min-w-[80%] md:min-w-[40%] md:scrollbar-default ">
              <div
                className="w-full h-full snap-center md:snap-start "
                key={index}
                onMouseOver={() => setHoverIndex(item)} 
                  onMouseLeave={() => setHoverIndex(null)}
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
