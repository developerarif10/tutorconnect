import { SectionTitle } from "@/components/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getCategories } from "@/queries/categories";
import { getCourseList } from "@/queries/courses";

import { InfiniteMovingCardsPage } from "@/components/ui/testimonial-cards";
import { getOverallReviews } from "@/queries/testimonials";
import CourseCard from "./courses/_components/CourseCard";

const HomePage = async () => {
  const courses = await getCourseList();
  const categories = await getCategories();
  const testimonials = await getOverallReviews();
  return (
    <>
      <section className="space-y-6 pt-6 md:pt-10 grainy">
        <div className="container space-y-24 flex flex-col max-w-[74rem] md:flex-row gap-4 relative isolate">
          <div className="flex flex-col justify-center">
            <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm w-fit font-medium border shadow-lg">
              Howdy
            </span>
            <h1 className="font-heading dark:text-black font-bold md:text-[3.2rem] leading-tight">
              Unlock Your Learning <br /> Potential
            </h1>
            <p className="leading-normal text-muted-foreground sm:leading-6">
              Explore diverse courses designed to inspire, educate, and empower
              learners of all levels
            </p>
            <div className="flex gap-3 flex-wrap mt-4">
              <Link
                href="/courses"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Explore Now
              </Link>
              <Link
                href="/register/instructor"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
              >
                Become An Instructor
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(70%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative w-full h-full flex lg:justify-end">
              <Image
                src="/assets/images/hero_man_withbg.webp"
                alt="Hero Image"
                width={700}
                height={700}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section id="categories" className="container space-y-6 py-8 ">
        <div className="flex items-center justify-between">
          <SectionTitle>Categories</SectionTitle>

          <Link
            href="#"
            className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
          >
            Browse All <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
          {categories.map((category) => {
            return (
              <Link
                href={`/categories/${category.id}`}
                key={category.id}
                className="relative overflow-hidden rounded-xl border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="flex flex-col gap-4 text-center items-center justify-start rounded-md p-6">
                  <Image
                    src={`/assets/images/categories/${category.thumbnail}`}
                    alt={category.title}
                    width={60}
                    height={60}
                  />
                  <div>
                    <h3 className="font-bold">{category.title}</h3>
                    <span className="">{category.sub_title}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

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
      <section id="accordion" className="container space-y-6 py-6 md:py-12">
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
      </section>
    </>
  );
};
export default HomePage;
