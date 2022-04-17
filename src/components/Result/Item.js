import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Item = (props) => {
  return (
    <Card
      onClick={(e) => (window.location.href = props.url)}
      className="card"
      variant="outlined"
      sx={{ backgroundColor: "#171717", borderColor: "#444444" }}
    >
      <CardContent>
        <div>
          <div className="card-top">
            <div className="card-icon">
              <img alt="icon" src={props.avatar} />
            </div>
            <div className="card-info">
              <div className="card-head">
                <div className="card-title">
                  <h3>
                    {props.name.length >= 25
                      ? props.name.substring(0, 34) + "..."
                      : props.name}
                  </h3>
                </div>
                <div className="card-fork">
                  <Button size="small" sx={{ color: "white" }}>
                    Forks | {props.forks}
                  </Button>
                </div>
              </div>
              <div className="card-des">
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-stars">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#8FBDD3",
                  borderColor: "#444444",
                  borderRadius: 5,
                }}
              >
                <StarRoundedIcon /> <span>{props.stars}</span>
              </Button>
            </div>
            <div className="card-owner">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#8FBDD3",
                  borderColor: "#444444",
                  borderRadius: 5,
                }}
              >
                Owner | {props.owner}
              </Button>
            </div>
            <div className="card-language">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#8FBDD3",
                  borderColor: "#444444",
                  borderRadius: 5,
                }}
              >
                Lang | {props.language == null ? "N/A" : props.language}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;
