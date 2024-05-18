import { ReactNode } from "react";
import { FiltersDataProvider } from "../model/games-filters-model";

export function GamesProvider({ children }: { children: ReactNode }) {
  return <FiltersDataProvider>{children}</FiltersDataProvider>;
}
