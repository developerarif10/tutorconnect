import { auth } from "@/auth";
import SingleSidebarCourse from "../_components/SingleSidebarCourse";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";

import { replaceMongoIdInArray } from "@/lib/convertData";
import { getCourseDetails } from "@/queries/courses";
import { hasEnrollmentForCourse } from "@/queries/enrollments";
import { getUserByEmail } from "@/queries/users";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);

  const session = await auth();

  const loggedInUser = await getUserByEmail(session?.user?.email);

  const hasEnrollment = await hasEnrollmentForCourse(
    course?.id,
    loggedInUser?.id
  );

  return (
    <section id="single-course" className="">
      <CourseDetailsIntro course={course} />

      <div className="container flex ">
        <div className={!hasEnrollment ? "lg:w-4/5" : "w-full"}>
          <CourseDetails course={course} />
          {course?.testimonials > 0 && (
            <Testimonials
              testimonials={replaceMongoIdInArray(course?.testimonials)}
            />
          )}
          {/*<RelatedCourses />*/}
        </div>
        {!hasEnrollment && (
          <div className="lg:w-1/2 lg:h-auto ">
            <SingleSidebarCourse course={course} />
          </div>
        )}
      </div>
      <div className="container my-10">
        <hr />
      </div>
    </section>
  );
};
export default SingleCoursePage;
