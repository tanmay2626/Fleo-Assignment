import React from "react";
import List from "./List";

const Results = ({ results }) => {
  return (
    <div className="results">
      <div className="results-head">
        <h4>{results.resultCount} repository results</h4>
      </div>
      <div className="results-section">
        <List items={results.items} />
      </div>
    </div>
  );
};

export default Results;
