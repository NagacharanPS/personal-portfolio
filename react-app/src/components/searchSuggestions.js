import React, { useState } from "react";
import SearchBar from "./searchBar";
import { ArrowUpLeft } from "lucide-react";
import "../css/searchSuggetions.css";

function SearchSuggestions() {
  const sections = [
    { id: 1, title: "profile" },
    { id: 2, title: "about" },
    { id: 3, title: "experience" },
    { id: 4, title: "certifications" },
    { id: 5, title: "projects" },
    { id: 6, title: "contact" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSuggestionsOpen(query !== "");
  };

  const handleClick = (title) => {
    document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
    setSearchQuery("");
    setSuggestionsOpen(false);
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-container">
      <SearchBar onSearch={handleSearch} />
      {suggestionsOpen && filteredSections.length > 0 && (
        <div>
          {filteredSections.map((section) => (
            <div key={section.id} className="suggetions-container">
              <p onClick={() => handleClick(section.title)}>
                {section.title} <ArrowUpLeft className="arrowUpLeft" />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchSuggestions;
