import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pages = ({ setPage, pageSize }) => {
  const handleChange = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <div className="pages">
      <Pagination
        count={pageSize}
        className="pg"
        color="primary"
        value={1}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            className="pg"
            sx={{ color: "white" }}
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default Pages;
