"use client";
import games from "@/src/shared/data/games.json";
import { useFilters } from "./games-filters-model";

export function useGamesList() {
  const { data } = useFilters();
  let filteredData = games;

  if (+data.item === 1) filteredData = games;
  else if (+data.item === 2) {
    filteredData = games.filter((game) => game.status === "popular");
  } else if (+data.item === 3) {
    filteredData = games.filter((game) => game.platform === "VR");
  } else if (+data.item === 4) {
    filteredData = games.filter((game) => game.platform === "Play Station 4");
  } else if (+data.item === 5) {
    filteredData = games.filter((game) =>
      game.mode.includes("многопользовательский")
    );
  }

  return filteredData;
}
