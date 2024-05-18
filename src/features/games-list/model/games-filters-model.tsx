"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export type GamesFiltersData = {
  item: number;
};

const filtersContext = createContext<{
  data: GamesFiltersData;
  setData: Dispatch<SetStateAction<GamesFiltersData>>;
} | null>(null);

export function FiltersDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState({ item: 3 });
  return (
    <filtersContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
      {children}
    </filtersContext.Provider>
  );
}

export function useFilters() {
  const contextValue = useContext(filtersContext);
  if (!contextValue) throw new Error("context not provided");
  const { data, setData } = contextValue;
  const updateOption = (item: number) => {
    setData((d) => ({ ...d, item }));
  };
  return { data, updateOption };
}
