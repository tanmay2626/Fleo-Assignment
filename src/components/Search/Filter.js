import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Button from "@mui/material/Button";
import Pages from "./Pagination";

const Filter = ({ setSort, setPage, resultCount }) => {
  const [option, setOption] = useState("");

  const handSelect = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const select = option.split("-");
    setSort({
      sort: select[0],
      order: select[1],
    });
  };

  const pageSize = resultCount / 10;

  return (
    <div className="filter">
      <div className="options">
        <FormControl
          variant="filled"
          sx={{
            s: 1,
            minWidth: 110,
            backgroundColor: "#2B2B2B",
            borderRadius: 1,
          }}
          size="small"
        >
          <InputLabel
            sx={{ color: "white" }}
            id="demo-simple-select-filled-label"
          >
            Sort by
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value=""
            onChange={handSelect}
          >
            <MenuItem value="stars-asc">Stars(Asc)</MenuItem>
            <MenuItem value="stars-dsc">Stars(Dsc)</MenuItem>
            <MenuItem value="name-asc">Name(Asc)</MenuItem>
            <MenuItem value="name-dsc">Name(Dsc)</MenuItem>
            <MenuItem value="none">None</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            color: "white",
            backgroundColor: "#2B2B2B",
            marginLeft: 2,
            marginTop: 1,
          }}
          startIcon={<FilterAltOutlinedIcon />}
        >
          Apply
        </Button>
      </div>
      <Pages setPage={setPage} pageSize={pageSize} />
    </div>
  );
};

export default Filter;
