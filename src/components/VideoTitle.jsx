import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/3 left-24 text-white w-1/3 bg-gradient-to-r">
      <h1 className="text-6xl font-bold drop-shadow-md">{title}</h1>
      <p className="py-6 text-lg drop-shadow-md">{overview}</p>
      <div>
        <button className="bg-white text-black font-semibold p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 transition">
          ▶️ Play
        </button>
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg mx-3 bg-opacity-60 hover:bg-opacity-80 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
