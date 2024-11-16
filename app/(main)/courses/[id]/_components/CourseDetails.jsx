import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatMyDate } from "@/lib/date";

import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";
import CourseOverview from "./CourseOverview";

import { Star } from "lucide-react";
import Image from "next/image";

const CourseDetails = ({ course }) => {
  const lastModifiedDate = formatMyDate(course?.modifiedOn);

  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className="text-xs w-fit rounded-lg px-2.5 p-2 bg-[rgba(23,162,184,.08)] text-[#17a2b8] font-semibold">
          {course?.category?.title}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
          {course?.title}
        </h3>
        <p className="mt-3 text-gray-600 text-sm">{course?.subtitle}</p>
        {/*  */}
        <div className="flex gap-2 mt-6">
          <div className="flex gap-2">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src={course?.instructor?.profilePicture}
              alt={course?.instructor?.firstName}
              width={20}
              height={20}
            />
          </div>
          <div className="flex sm:items-center gap-3 flex-col sm:flex-row sm:gap-3 md:gap-20 ">
            <div className="flex flex-col items-center gap-2 text-sm">
              <span className="font-normal">Teacher</span>
              <p className="font-bold">
                {course?.instructor?.firstName} {course?.instructor?.lastName}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <span className="text-success font-normal">Last Updated</span>
              <span>{lastModifiedDate}</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <span className="flex">
                <Star size={15} color="#ffdf3d" fill="#ffdf3d" />
                <Star size={15} color="#ffdf3d" fill="#ffdf3d" />
                <Star size={15} color="#ffdf3d" fill="#ffdf3d" />
                <Star size={15} color="#ffdf3d" fill="#ffdf3d" />
                <Star size={15} color="#ffdf3d" fill="#ffdf3d" />
              </span>
              <span className="font-normal">Review</span>
            </div>
          </div>
        </div>

        {/* Tab */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview">
              {/* each tab content can be independent component */}
              <CourseOverview course={course} />
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseCurriculam course={course} />
            </TabsContent>
            <TabsContent value="instructor">
              <CourseInstructor course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
