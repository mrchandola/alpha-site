import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState(""); // Store search query
  const navigate = useNavigate(); // Initialize navigation

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-location?searchTerm=${encodeURIComponent(query)}`); // Redirect with search string
    }
  };

  return (
    <div className="main-search-input-wrap">
      <div className="main-search-input fl-wrap row">
        {/* Search Input Field */}
        <div className="main-search-input-item col-10">
          <input
            type="text"
            placeholder="Search by : Country, City, University, Properties"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Handle "Enter" key press
          />
        </div>

        {/* Search Button */}
        <div className="main-search-input-item col-2">
          <button
            type="button"
            className="main-search-button btn-danger pull-right w-100"
            onClick={handleSearch}
          >
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
