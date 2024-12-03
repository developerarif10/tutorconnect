import { getCategories } from "@/queries/categories";
import { getCourseList, getSearchedCourses } from "@/queries/courses";
import CourseCard from "./CourseCard";
import NoCourses from "./NoCourses";

export default async function CoursesList({ searchParams, CATEGORY_OPTIONS }) {
  let courses;
  if (searchParams) {
    courses = await getSearchedCourses(searchParams.query);
  } else {
    courses = await getCourseList();
  }

  const categories = await getCategories();
  const categoryMapping = categories.reduce((acc, category) => {
    acc[category.title.toLowerCase()] = category._id;
    return acc;
  }, {});

  // Apply category filtering
  if (searchParams?.category) {
    const selectedCategories = searchParams.category.split(",");

    // Filter courses based on selected category values
    courses = courses.filter((course) => {
      const courseCategoryId = course.category; // This should be an ObjectId

      // Check if courseCategoryId is defined before calling toString
      if (!courseCategoryId) {
        return false;
      }

      const isMatch = selectedCategories.includes(
        CATEGORY_OPTIONS.find(
          (option) => option._id === courseCategoryId.toString()
        )?.value
      );
      return isMatch;
    });
  }

  // Apply sorting
  const allCourses = [...courses].sort((a, b) => {
    switch (searchParams?.sort) {
      case "price(high)":
        return b.price - a.price;
      case "price(low)":
        return a.price - b.price;
      default:
        return 0; // Keep original order
    }
  });

  return (
    <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {allCourses.length > 0 ? (
        allCourses.map((course) => {
          return (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          );
        })
      ) : (
        <NoCourses />
      )}
    </div>
  );
}
