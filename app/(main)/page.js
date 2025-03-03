import { SectionTitle } from "@/components/section-title";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { getCourseList } from "@/queries/courses";

import Categories from "@/components/categories-section";
import { FAQSection } from "@/components/faq-section";
import Hero from "@/components/hero-section/hero";
import { InfiniteMovingCardsPage } from "@/components/ui/testimonial-cards";
import { getOverallReviews } from "@/queries/testimonials";
import CourseCard from "./courses/_components/CourseCard";

const HomePage = async () => {
  const courses = await getCourseList();
  // const categories = await getCategories();
  const testimonials = await getOverallReviews();
  return (
    <>
      {/* --- Hero section code --- */}
      <Hero />
      {/* --- Category section --- */}
      <Categories />

      {/* Courses */}
      <section id="courses" className="container space-y-6 md:py-12">
        <div className="flex items-center justify-between">
          <SectionTitle className="text-3xl md:text-4xl font-bold">
            Courses
          </SectionTitle>
          <Link
            href="/courses"
            className=" text-sm font-medium hover:opacity-80 flex items-center gap-1"
          >
            Browse All <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {courses.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </section>

      <section id="testimonials" className="container space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle className="text-3xl md:text-4xl font-bold mt-10">
            Get a glimpse of what others are achieving through learning
          </SectionTitle>
        </div>

        <div className="grid">
          <InfiniteMovingCardsPage testimonials={testimonials} />
        </div>
      </section>

      {/* card section */}

      <div className="py-12">
        <div
          className="lg:w-5/6 flex flex-col py-12 px-24 sm:flex-row sm:items-center items-start mx-auto "
          style={{
            backgroundImage: 'url("./assets/images/coverbg.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-white text-center sm:text-justify">
            <h2 className="text-3xl mb-2">Become an Instructor!</h2>
            <p className="flex-grow pr-0 sm:pr-16 leading-normal text-lg">
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced. Yet uncommonly his
              ten who diminution astonished.
            </p>
          </div>

          <button className="flex-shrink-0 ml-8 text-white bg-indigo-500 py-2 px-8 text-lg mt-10 sm:mt-0 rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
            <span className="font-medium text-center group-hover:text-white">
              Become an Instructor
            </span>
          </button>
        </div>
      </div>

      {/* Accordion section */}
      <FAQSection />
    </>
  );
};
export default HomePage;
