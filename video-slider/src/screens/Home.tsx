import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import NavBar from "../components/NavBar";
import { data } from "../RawData";

const Home = () => {

  
  
  
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-auto bg-black">
      <NavBar></NavBar>

      <div className='relative flex items-center'>
    
        <div
          id='slider'
          className='flex w-full h-full overflow-x-scroll hover:snap-x scroll pb-15 whitespace-nowrap scroll-auto'
        >
          {data.map((item, index) => (
          <div className="min-w-[80%] md:min-w-[40%] md:scrollbar-default">
            <div
              className="w-full h-full snap-center rounded-xl md:scrollbar-default"
              key={index}
            >
              <HoverVideoPlayer
                videoSrc={item.video}
                pausedOverlay={
                  <img
                    className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
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
            </div>

            <h2 className="text-white">
              <b> Cordury Gary</b>
            </h2>
            <h3>1st July 9pm</h3>
          </div>
        ))}
         
      
      </div>

      </div>
    </div>
  );
};
export default Home;
