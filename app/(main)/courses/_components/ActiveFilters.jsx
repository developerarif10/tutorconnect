"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ActiveFilters = ({ filter }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    sort: null,
  });

  useEffect(() => {
    const categories = searchParams.get("category")?.split(",") || [];
    const sort = searchParams.get("sort");
    setActiveFilters({ categories, sort });
  }, [searchParams]);

  const removeFilter = (type, value) => {
    const params = new URLSearchParams(searchParams);

    if (type === "categories") {
      const categories = params.get("category")?.split(",") || [];
      const newCategories = categories.filter((cat) => cat !== value);

      if (newCategories.length > 0) {
        params.set("category", newCategories.join(","));
      } else {
        params.delete("category");
      }
    } else if (type === "sort") {
      params.delete("sort");
    }

    // Preserve search query if exists
    const query = params.get("query");
    if (query) params.set("query", query);

    replace(`${pathname}?${params.toString()}`);
  };

  if (!activeFilters.categories.length && !activeFilters.sort) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* active categories */}
      {activeFilters.categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
          onClick={() => removeFilter("categories", category)}
        >
          {category}
          <X className="w-3" />
        </Button>
      ))}
      {/* active prices */}
      {activeFilters.sort && (
        <Button
          variant="ghost"
          className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
          onClick={() => removeFilter("sort")}
        >
          {activeFilters.sort === "price(high)"
            ? "Price: High to Low"
            : "Price: Low to High"}
          <X className="w-3" />
        </Button>
      )}
    </div>
  );
};

export default ActiveFilters;
