import SingleSidebarCourse from "../_components/SingleSidebarCourse";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";

import { replaceMongoIdInArray } from "@/lib/convertData";
import { getCourseDetails } from "@/queries/courses";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);
  return (
    <section id="single-course" className="">
      <CourseDetailsIntro course={course} />

      <div className="container flex ">
        <div className="lg:w-4/5">
          <CourseDetails course={course} />
          {course?.testimonials > 0 && (
            <Testimonials
              testimonials={replaceMongoIdInArray(course?.testimonials)}
            />
          )}
          {/*<RelatedCourses />*/}
        </div>
        <div className="lg:w-1/2 lg:h-auto ">
          <SingleSidebarCourse course={course} />
        </div>
      </div>
      <div className="container my-10">
        <hr />
      </div>
    </section>
  );
};
export default SingleCoursePage;
