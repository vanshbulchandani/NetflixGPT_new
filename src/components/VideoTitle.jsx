import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/4 left-12 md:left-24 text-white w-2/3 md:w-1/2 space-y-4 z-20">
      <h1 className="text-3xl md:text-6xl font-bold drop-shadow-md">{title}</h1>
      <p className="hidden md:block py-4 text-lg drop-shadow-md">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black font-semibold py-2 px-6 md:py-4 md:px-10 text-md md:text-xl rounded-md hover:bg-opacity-80 transition">
          ▶️ Play
        </button>
        <button className="bg-gray-400 text-black font-semibold py-2 px-6 md:py-4 md:px-10 text-md md:text-xl rounded-md hover:bg-opacity-80 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
