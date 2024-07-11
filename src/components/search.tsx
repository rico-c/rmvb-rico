"use client";

import { Input } from "@/components/ui/input";
import useCharacter from "@/hooks/getCharacter";
import { fetchGet } from "@/utils/fetch";
import { useEffect, useState } from "react";

export const Search = () => {
  const [searchContent, setSearchContent] = useState("");
  const [page, setPage] = useState(0);

  useCharacter(page)

  return (
    <div>
      <Input
        placeholder="Seach here"
        onChange={(e) => setSearchContent(e.target.value)}
      />
    </div>
  );
};
