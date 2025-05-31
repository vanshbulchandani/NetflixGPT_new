// src/components/GptSearchBar.js
import lang from "../utils/launguageConstants";
import { useSelector } from "react-redux";
import React, { useRef, useState } from "react";
import openai from "../utils/openAi"; // Make sure this is set up for OpenRouter

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [movieResults, setMovieResults] = useState(null);

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    if (!userQuery) return;

    const gptQuery = `
Act as a Movie Recommendation system and suggest some movies for the query: "${userQuery}". 
Only give me names of 5 movies, comma separated like the example result given ahead. 
Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1-0528:free",
        messages: [
          {
            role: "user",
            content: gptQuery.trim(),
          },
        ],
      });

      const message = completion.choices[0].message.content;
      console.log("GPT Response:", message);
      setMovieResults(message);
    } catch (err) {
      console.error("Error fetching GPT response:", err);
    }
  };

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 placeholder-black bg-white text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {movieResults && (
        <div className="mt-4 p-4 bg-white text-black w-1/2 rounded-lg shadow">
          <h2 className="font-bold mb-2">Recommended Movies:</h2>
          <p>{movieResults}</p>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
