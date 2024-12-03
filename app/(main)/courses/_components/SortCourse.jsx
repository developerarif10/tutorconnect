"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Grid2x2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SortCourse = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const currentSort = searchParams.get("sort");
    setSortOption(currentSort || "");
  }, [searchParams]);

  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams);

    // Preserve existing query parameters
    const query = params.get("query");
    params.delete("sort");
    if (value !== "default") {
      params.set("sort", value);
    }
    // Preserve search query if it exists
    if (query) {
      params.set("query", query);
    }
    setSortOption(value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select value={sortOption} onValueChange={handleSort}>
      <SelectTrigger className="w-[200px] border-none bg-[#f5f5f5] !border-b focus:ring-0 focus:ring-offset-0 overflow-hidden">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xs font-bold text-center">
            Sort Options
          </SelectLabel>
          <SelectItem className="pl-4" value="default">
            <div className="flex gap-2 items-center">
              <Grid2x2 />
              Default
            </div>
          </SelectItem>
          <SelectItem className="pl-4" value="price(high)">
            <div className="flex gap-2 items-center">
              <ArrowDownWideNarrow />
              Price: High to Low
            </div>
          </SelectItem>
          <SelectItem className="pl-4" value="price(low)">
            <div className="flex gap-2 items-center">
              <ArrowUpNarrowWide />
              Price: Low to High
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortCourse;
