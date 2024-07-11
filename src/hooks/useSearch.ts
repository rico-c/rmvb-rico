import { useGlobalContext } from "@/context/context";
import { fetchGet } from "@/utils/fetch";
import { useEffect } from "react";

export const useSearch = ({ searchContent }: { searchContent: string }) => {
  const { currentPage, setList, setTotalPage, setCurrentPage } = useGlobalContext();

  useEffect(() => {
    setCurrentPage(1)
  }, [searchContent])

  useEffect(() => {
    const getSearch = async () => {
      const res = await fetchGet("/character", {
        name: searchContent,
        page: currentPage
      });
      setList(res.results);
      setTotalPage(res.info.pages);
    };
    getSearch();
  }, [searchContent, currentPage]);
};
