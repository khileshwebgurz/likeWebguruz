// components/SearchBar.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Handle search on button click or Enter key press
  const handleSearch = () => {
    const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
    router.push(`/?s=${formattedSearchTerm}`);
  };

  const handleKeyDown = (e) => {
    // Trigger search on Enter key (key code 13)
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}  // Enable search on Enter key press
        aria-label="Search posts"
      />
      <button className="Search-btn" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
