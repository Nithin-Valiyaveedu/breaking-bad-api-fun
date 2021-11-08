import React from "react";
import CharacterItem from "./CharacterItem";

import spinner from "../img/spinner.gif"
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <img className="spinner" src={spinner} alt=''></img>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
