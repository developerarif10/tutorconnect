import { MessageSquare, Presentation, Star, UsersRound } from "lucide-react";

import { getCourseDetailsByInstructor } from "@/queries/courses";

import Image from "next/image";

const CourseInstructor = async ({ course }) => {
  const instructor = course?.instructor;
  const fullName = `${instructor?.firstName || ""} ${
    instructor?.lastName || ""
  }`.trim();
  const courseDetailsByInstructor = await getCourseDetailsByInstructor(
    instructor?._id?.toString()
  );
  // console.log(courseDetailsByInstructor)

  return (
    <div className="py-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src={instructor?.profilePicture}
              alt={fullName}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{fullName}</h2>
            <p className="text-purple-600 font-medium mt-1">
              {instructor?.designation}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                <Presentation size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Courses</p>
                <p className="font-semibold">
                  {courseDetailsByInstructor?.courses || 0}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                <UsersRound size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Students</p>
                <p className="font-semibold">
                  {courseDetailsByInstructor?.enrollments || 0}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Reviews</p>
                <p className="font-semibold">
                  {courseDetailsByInstructor?.reviews || 0}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                <Star size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Average Rating</p>
                <p className="font-semibold">
                  {courseDetailsByInstructor?.ratings || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-slate-900">
          About the Instructor
        </h3>
        <p className="text-slate-700 leading-relaxed">
          {instructor?.bio || "No bio available."}
        </p>
      </div>
    </div>
  );
};

export default CourseInstructor;
