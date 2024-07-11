"use client";

import { Character } from "@/types/Character";
import { createContext, ReactElement, useContext, useState } from "react";

const initialState: Character[] = [];

const GlobalContext = createContext<{
  list: Character[];
  setList: any;
  currentPage: number;
  totalPage: number;
  setCurrentPage: (num: number) => void;
  setTotalPage: (num: number) => void;
}>({
  list: [],
  setList: () => {},
  currentPage: 1,
  totalPage: 1,
  setCurrentPage: () => {},
  setTotalPage: () => {}
});

export function GlobalProvider({ children }: { children: ReactElement }) {
  const [list, setList] = useState<Character[]>(initialState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  return (
    <GlobalContext.Provider
      value={{
        list,
        setList,
        currentPage,
        setCurrentPage,
        totalPage,
        setTotalPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
