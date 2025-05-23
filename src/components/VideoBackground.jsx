import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const TrailerVideo = useSelector((store) => store.movies?.TrailerVideo);
  useMovieTrailer(movieId);

  const [isHovered, setIsHovered] = useState(false);

  if (!TrailerVideo) return null;

  const baseUrl = `https://www.youtube.com/embed/${TrailerVideo.key}`;
  const videoParams = `?autoplay=1&mute=1&controls=0&loop=1&playlist=${TrailerVideo.key}`;
  const fullVideoUrl = baseUrl + videoParams;

  const thumbnailUrl = `https://img.youtube.com/vi/${TrailerVideo.key}/maxresdefault.jpg`;

  return (
    <div
      className="w-full h-[90vh] relative overflow-hidden bg-black" // Changed from h-[75vh] to h-[90vh]
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background thumbnail or video */}
      {!isHovered ? (
        <img
          src={thumbnailUrl}
          alt="Trailer thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <iframe
          className="w-full h-full pointer-events-none"
          src={fullVideoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
    </div>
  );
};

export default VideoBackground;
