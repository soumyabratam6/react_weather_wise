// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Search = ({ setWeatherDetails }) => {
  const [search, setSearch] = useState("");

  const handelInput = (e) => {
    setSearch(e.target.value);
    setWeatherDetails(null);
  };

  const handelKeyDown = async (e) => {
    if (e.key != "Enter") return;
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: search },
      headers: {
        "x-rapidapi-key": "d1205edf12msh8197fadd6c5589ap1cdb01jsnf1b9f062f1df",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("search-input", search);
  return (
    <div className="search-section">
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search for city"
          onChange={handelInput}
          onKeyDown={handelKeyDown}
        />
      </div>
    </div>
  );
};

export default Search;
