import { formatPrice } from "@/lib/formatPrice";
import { BookOpen, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { auth } from "@/auth";
import { EnrollCourse } from "@/components/enroll-course";
import { Button } from "@/components/ui/button";
import { getCategoryById } from "@/queries/categories";
import { hasEnrollmentForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";

const CourseCard = async ({ course }) => {
  const session = await auth();
  const category = await getCategoryById(course?.category);
  const loggedInUser = await getUserByEmail(session?.user?.email);

  const hasEnrollment = await hasEnrollmentForCourse(
    course?.id,
    loggedInUser?.id
  );
  const categoryTitle = category?.title || "Unknown Category";

  return (
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-3xl p-3 h-full">
      <Link key={course.id} href={`/courses/${course.id}`}>
        <div>
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
              src={`/assets/images/courses/${course?.thumbnail}`}
              alt={course?.title}
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col pt-2">
            <div className="text-lg md:text-base mb-2 font-medium group-hover:text-sky-700 line-clamp-2">
              {course?.title}
            </div>
            {categoryTitle && (
              <span className="text-xs w-fit rounded-lg px-2.5 p-2 bg-[rgba(23,162,184,.08)] text-[#17a2b8] font-semibold">
                {categoryTitle}
              </span>
            )}

            <div className="my-3 flex items-center text-sm md:text-xs">
              <div className="flex gap-5 text-slate-500">
                <div className="flex items-center gap-x-1 ">
                  <BookOpen className="w-4" />
                  <span>{course?.modules?.length} Chapters</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <UserRound className="w-4" />
                  <span>45 Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-4">
        <p className="text-md md:text-sm font-bold text-[#1a73e8]">
          {formatPrice(course?.price)}
        </p>
        {hasEnrollment ? (
          <span className="text-sm text-green-500">Enrolled</span>
        ) : (
          <EnrollCourse asLink={true} courseId={course?.id} />
        )}
      </div>
      <div className="mt-4">
        <Link href={`/courses/${course.id}`}>
          <Button className="w-full bg-[#1a73e8] rounded-3xl font-semibold text-md">
            Course Preview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
