"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PRICE_OPTIONS = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

const FilterCourse = ({ searchParams, CATEGORY_OPTIONS }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const initialSelectedCategories = searchParams.category
    ? searchParams.category.split(",")
    : [];
  const [selectedCategories, setSelectedCategories] = useState(
    initialSelectedCategories
  );

  const handleCategoryChange = (id) => {
    const newSelectedCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((cat) => cat !== id)
      : [...selectedCategories, id];

    setSelectedCategories(newSelectedCategories);
    const params = new URLSearchParams(searchParams);
    // Update the URL with the selected category values
    if (newSelectedCategories.length > 0) {
      params.set(
        "category",
        newSelectedCategories
          .map(
            (catId) =>
              CATEGORY_OPTIONS.find((option) => option._id === catId)?.value
          )
          .join(",")
      );
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="hidden lg:block">
      <Accordion defaultValue={["categories"]} type="multiple">
        <AccordionItem value="categories">
          <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Categories</span>
          </AccordionTrigger>

          <AccordionContent className="pt-6 animate-none">
            <ul className="space-y-4">
              {CATEGORY_OPTIONS.map((option) => (
                <li key={option._id} className="flex items-center">
                  <Checkbox
                    id={`category-${option.value}`}
                    checked={selectedCategories.includes(option._id)}
                    onCheckedChange={() => handleCategoryChange(option._id)}
                  />
                  <label
                    htmlFor={`category-${option.value}`}
                    className="ml-3 text-sm text-gray-600 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        {/* Price filter */}
        <AccordionItem value="price">
          <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Price</span>
          </AccordionTrigger>

          {/* <AccordionContent className="pt-6 animate-none">
            <ul className="space-y-4">
              {PRICE_OPTIONS.map((option, optionIdx) => (
                <li key={option.value} className="flex items-center">
                  <Checkbox
                    type="checkbox"
                    id={`price-${optionIdx}`}
                    onCheckedChange={() => {
                      applyArrayFilter({
                        type: "price",
                        value: option.value,
                      });
                    }}
                    checked={filter.price.includes(option.value)}
                  />
                  <label
                    htmlFor={`price-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </AccordionContent> */}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCourse;
