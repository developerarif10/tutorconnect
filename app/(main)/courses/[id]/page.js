import { auth } from "@/auth";
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
        <div>
          <CourseDetails course={course} />
          {course?.testimonials > 0 && (
            <Testimonials
              testimonials={replaceMongoIdInArray(course?.testimonials)}
            />
          )}
          {/*<RelatedCourses />*/}
        </div>
      </div>
    </section>
  );
};
export default SingleCoursePage;
