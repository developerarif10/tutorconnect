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
          <SectionTitle>Courses</SectionTitle>
          <Link
            href={"/courses"}
            className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
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
          <SectionTitle>
            Get a glimpse of what others are achieving through learning
          </SectionTitle>
        </div>

        <div className="grid">
          <InfiniteMovingCardsPage testimonials={testimonials} />
        </div>
      </section>

      {/* card section */}
      <section>
        <div className="py-12">
          <div
            className="lg:w-5/6 flex flex-col py-12 px-24 sm:flex-row sm:items-center items-start mx-auto "
            style={{
              backgroundImage: 'url("./assets/images/coverbg.svg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white">
              <h2 className="text-3xl">Become an Instructor!</h2>
              <p className="flex-grow sm:pr-16 ">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished.
              </p>
            </div>

            <button className="flex-shrink-0 text-white bg-indigo-500 py-2 px-8 text-lg mt-10 sm:mt-0 rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
              <span className="font-medium group-hover:text-white">
                Become an Instructor
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Accordion section */}
      {/* <section id="accordion" className="container space-y-6 py-6 md:py-12">
        <h1 className="text-3xl">
          Frequently Asked Questions: We're Here to Help
        </h1>
        <div className="md:container md:flex gap-4 sm:p-4 justify-center">
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#e3f2fd] rounded-xl p-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of courses do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of courses across various fields such as
                  Business & Management, Technology & Coding, Design & Creative
                  Arts, and Finance & Accounting. Our courses are designed for
                  learners at different levels, from beginners to advanced
                  professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I enroll in a course?
                </AccordionTrigger>
                <AccordionContent>
                  Enrolling in a course is simple! Just sign up for an account,
                  browse our course catalog, and select the course you’re
                  interested in. Once you’ve completed the payment process,
                  you’ll gain immediate access to the course materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are the courses self-paced or instructor-led?
                </AccordionTrigger>
                <AccordionContent>
                  Our platform offers both self-paced courses and instructor-led
                  courses. Self-paced courses allow you to learn at your own
                  speed, while instructor-led courses provide scheduled lessons,
                  live sessions, and personal feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#e3f2fd] rounded-xl p-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of courses do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of courses across various fields such as
                  Business & Management, Technology & Coding, Design & Creative
                  Arts, and Finance & Accounting. Our courses are designed for
                  learners at different levels, from beginners to advanced
                  professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I enroll in a course?
                </AccordionTrigger>
                <AccordionContent>
                  Enrolling in a course is simple! Just sign up for an account,
                  browse our course catalog, and select the course you’re
                  interested in. Once you’ve completed the payment process,
                  you’ll gain immediate access to the course materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are the courses self-paced or instructor-led?
                </AccordionTrigger>
                <AccordionContent>
                  Our platform offers both self-paced courses and instructor-led
                  courses. Self-paced courses allow you to learn at your own
                  speed, while instructor-led courses provide scheduled lessons,
                  live sessions, and personal feedback.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section> */}
      <FAQSection />
    </>
  );
};
export default HomePage;
