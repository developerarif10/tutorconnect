"use client";
import { Input } from "@/components/ui/input";
import useSearch from "@/hooks/useSearch";
import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchCourse = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { query, handleSearch, setQuery } = useSearch();

  const clearSearch = () => {
    setQuery("");
    handleSearch("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch(query);
    }
  };

  return (
    <div className="relative h-10 max-lg:w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search courses..."
        className="pl-8 pr-3 py-2 text-sm" // Add additional styling as needed
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchCourse;
