import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import NavBar from "../components/NavBar";
import { data } from "../RawData";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-auto bg-black">
      <NavBar></NavBar>

      <div className="flex w-full gap-0 p-8 pb-5 mt-4 overflow-x-auto hover:snap-x scroll scroll-auto whitespace-nowrap md:scrollbar-default">
        {data.map((item) => (
          <div className="min-w-[80%] md:min-w-[40%] md:scrollbar-default">
            <div
              className="w-full h-full snap-center rounded-xl md:scrollbar-default"
              key={item.id}
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
  );
};
export default Home;
