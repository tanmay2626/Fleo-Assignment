import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import Filter from "./Filter";
import axios from "axios";

const Search = ({ setResults, resultCount }) => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  //const [pageSize,setPageSize] = useState(10)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [sort, setSort] = useState({
    sort: "sort",
    order: "dsc",
  });

  const url =
    "https://api.github.com/search/repositories?q=" +
    search +
    "&sort=" +
    sort.sort +
    "&order=" +
    sort.order +
    "&page=" +
    page +
    "&per_page=10";
  const getData = () => {
    axios
      .get(url, {
        headers: { Authorization: "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" },
      })
      .then((res) => {
        const data = res.data;
        setResults({
          resultCount: data.total_count,
          items: data.items,
        });
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, url, sort, page]);

  return (
    <div className="search">
      <Paper
        onSubmit={handleSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 100 + "%",
          backgroundColor: "#171717",
        }}
      >
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="git">
          <GitHubIcon />
        </IconButton>
        <Divider
          sx={{ height: 28, m: 0.5, backgroundColor: "white" }}
          orientation="vertical"
        />
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Search Repository by Name or Language"
          onChange={handleChange}
        />
        <IconButton onClick={handleSubmit} sx={{ p: "10px", color: "white" }}>
          <SearchIcon />
        </IconButton>
      </Paper>
      {search !== "" && (
        <Filter resultCount={resultCount} setPage={setPage} setSort={setSort} />
      )}
    </div>
  );
};

export default Search;
