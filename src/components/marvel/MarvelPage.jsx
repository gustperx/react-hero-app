import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-4xl text-red-400">Marvel</h1>
      <hr className="my-4" />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
