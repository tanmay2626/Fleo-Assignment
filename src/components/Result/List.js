import React from "react";
import Item from "./Item";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.full_name}
            avatar={item.owner.avatar_url}
            forks={item.forks_count}
            description={item.description}
            url={item.html_url}
            owner={item.owner.login}
            language={item.language}
            stars={item.stargazers_count}
          />
        );
      })}
    </div>
  );
};

export default List;
