import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="Netflix Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Search Bar */}
      <GptSearchBar />

      {/* Movie Suggestions with spacing from SearchBar */}
      <div className="mt-8">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
