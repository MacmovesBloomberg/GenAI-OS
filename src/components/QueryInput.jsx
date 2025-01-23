import React, { useState } from "react";

function QueryInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <h2>Search Query</h2>
      <input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default QueryInput;
