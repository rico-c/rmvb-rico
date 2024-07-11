import { fetchGet } from "@/utils/fetch";
import { useEffect, useState } from "react";

export default function useCharacter(page: number) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getListData = async () => {
      const res = await fetchGet("/character", {
        page,
      });
      setData(res);
    };
    getListData();
  }, [page]);

  return data;
}
