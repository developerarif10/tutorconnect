import ActiveFilters from "./_components/ActiveFilters";
import FilterCourse from "./_components/FilterCourse";
import FilterCourseMobile from "./_components/FilterCourseMobile";
import SearchCourse from "./_components/SearchCourse";
import SortCourse from "./_components/SortCourse";

import Loading from "@/app/loading";
import { Suspense } from "react";
import CoursesList from "./_components/CoursesList";

export const CATEGORY_OPTIONS = [
  {
    _id: "666585088140602b20d12fa6",
    label: "Development",
    value: "development",
  },
  { _id: "666585088140602b20d12fa5", label: "Design", value: "design" },
  { _id: "666585088140602b20d12fa7", label: "Marketing", value: "marketing" },
  {
    _id: "666585088140602b20d12fa8",
    label: "IT & Software",
    value: "it-software",
  },
  {
    _id: "666585088140602b20d12fa9",
    label: "Personal Development",
    value: "personal-development",
  },
  { _id: "666585088140602b20d12faa", label: "Business", value: "business" },
  {
    _id: "666585088140602b20d12fab",
    label: "Photography",
    value: "photography",
  },
  { _id: "666585088140602b20d12fac", label: "Music", value: "music" },
];

const CoursesPage = async ({ searchParams }) => {
  return (
    <section
      id="courses"
      className="container space-y-6   dark:bg-transparent py-6"
    >
      {/* <h2 className="text-xl md:text-2xl font-medium">All Courses</h2> */}
      {/* header */}
      <div className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
        <SearchCourse />
        <div className="flex items-center justify-end gap-2 max-lg:w-full">
          <SortCourse />

          {/* Filter Menus For Mobile */}
          <FilterCourseMobile />
        </div>
      </div>
      {/* header ends */}
      {/* active filters */}
      <ActiveFilters />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          {/* these component can be re use for mobile also */}
          <FilterCourse
            searchParams={searchParams}
            CATEGORY_OPTIONS={CATEGORY_OPTIONS}
          />
          {/* Course grid */}

          <Suspense key={searchParams.query} fallback={<Loading />}>
            <CoursesList
              CATEGORY_OPTIONS={CATEGORY_OPTIONS}
              searchParams={searchParams}
            />
          </Suspense>
        </div>
      </section>
    </section>
  );
};
export default CoursesPage;
