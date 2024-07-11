import { Character } from "@/types/Character";
import { fetchGet } from "@/utils/fetch";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/context";

export default function useCharacter(page: number): {
  loading: boolean;
} {
  const { setList, setCurrentPage, setTotalPage } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getListData = async () => {
      setLoading(true);
      const res = await fetchGet("/character", {
        page,
      });
      setList(res.results);
      setTotalPage(res.info.pages);
      setLoading(false);
    };
    getListData();
  }, [page, page]);

  return { loading };
}
