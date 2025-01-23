import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p><strong>Content:</strong> {result.content}</p>
              <p><strong>Citation:</strong> {result.citation}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
