"use client";
import { Input } from "@/components/ui/input";
import { LayoutGrid, Menu, Search } from "lucide-react";

const SearchCourse = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="relative h-10 max-lg:w-full">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search courses..."
          className="pl-4 pr-3 py-2 text-sm focus:outline-none" // Add additional styling as needed
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-1 border rounded-md border-[#010f1c]">
          <LayoutGrid />
        </div>
        <div className="p-1 border rounded-md border-[#010f1c]">
          <Menu />
        </div>
        <p className="text-gray-600 text-sm">Showing 1–14 of 26 results</p>
      </div>
    </div>
  );
};

export default SearchCourse;
