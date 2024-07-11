"use client";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";

export const Search = () => {
  const [searchContent, setSearchContent] = useState("");
  const debouncedSearchContent = useDebounce(searchContent, 500)

  useSearch({searchContent: debouncedSearchContent})

  return (
    <div>
      <Input
        placeholder="Seach here"
        onChange={(e) => setSearchContent(e.target.value)}
      />
    </div>
  );
};
