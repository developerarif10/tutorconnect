import { formatPrice } from "@/lib/formatPrice";
import { getCourseList } from "@/queries/courses";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function PopularCourses() {
  const courses = await getCourseList();

  // Get first 3 courses
  const topCourses = courses?.slice(0, 3);

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
          Popular Courses
        </h3>
        <Link href="/courses">
          <Button
            variant="ghost"
            size="sm"
            className="text-cyan-600 dark:text-cyan-400"
          >
            View All
          </Button>
        </Link>
      </div>

      <div className="space-y-3 md:space-y-4">
        {topCourses?.map((course) => (
          <Link
            href={`/courses/${course.id}`}
            key={course.id}
            className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={`/assets/images/courses/${course?.thumbnail}`} // Adjust the path according to your image storage
                alt={course?.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-white truncate">
                {course?.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                {course?.description}
              </p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 ${
                        i < 4
                          ? "text-yellow-400"
                          : "text-slate-300 dark:text-slate-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                  4.8 ({course.testimonials?.length || 0})
                </span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-sm md:text-base font-medium text-cyan-600 dark:text-cyan-400">
                {formatPrice(course.price)}
              </span>
            </div>
          </Link>
        ))}

        {!topCourses?.length && (
          <div className="text-center py-6 text-slate-500 dark:text-slate-400">
            No courses available at the moment.
          </div>
        )}
      </div>

      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Start learning today
            </p>
            <p className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white mt-1">
              Get 30% off your first course
            </p>
          </div>
          <Link href="/register/student">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full text-sm">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
