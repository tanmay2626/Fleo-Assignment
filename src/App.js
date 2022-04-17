import React, { useState } from "react";
import "./App.css";
import Home from "./components/Result/Home";
import Results from "./components/Result/Results";
import Search from "./components/Search/Search";

const App = () => {
  const [results, setResults] = useState({
    resultCount: "",
    items: [],
  });

  return (
    <div className="App">
      <Search resultCount={results.resultCount} setResults={setResults} />
      {results.resultCount === "" ? <Home /> : <Results results={results} />}
    </div>
  );
};

export default App;
