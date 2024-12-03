import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    // move to any specefic shop page (if-needed)
    replace(`/courses?${params.toString()}`);
    setQuery("");
  };

  useEffect(() => {
    const queryParam = searchParams.get("query") || "";
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);
  return { query, handleSearch, setQuery };
};
export default useSearch;
