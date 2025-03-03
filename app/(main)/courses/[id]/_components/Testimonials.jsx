// import { SectionTitle } from "@/components/section-title";
// import { StarRating } from "@/components/star-rating";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// const Testimonials = ({ testimonials }) => {
//   return (
//     <section className="pb-8 md:pb-12 lg:pb-24">
//       <div className="container">
//         <SectionTitle className="mb-6">Testimonials</SectionTitle>
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="max-2xl:w-[90%] w-full mx-auto"
//         >
//           <CarouselPrevious />
//           <CarouselNext />
//           <CarouselContent className="py-4">
//             {testimonials.map((testimonial) => (
//               <CarouselItem
//                 key={testimonial.id}
//                 className="md:basis-1/2 lg:basis-1/3"
//               >
//                 <div className="sm:break-inside-avoid">
//                   <blockquote className="rounded-lg bg-gray-50 p-6  sm:p-8 shadow-sm">
//                     <div className="flex items-center gap-4">
//                       <Image
//                         alt={testimonial?.user?.first_name}
//                         src={testimonial?.user?.profilePicture}
//                         width="56"
//                         height="56"
//                         className="size-14 rounded-full object-cover"
//                       />
//                       <div>
//                         <p className="mt-0.5 text-lg font-medium text-gray-900">
//                           {testimonial?.user?.first_name}{" "}
//                           {testimonial?.user?.last_name}
//                         </p>
//                         <div className="flex justify-center gap-0.5 text-yellow-600">
//                           <StarRating rating={testimonial?.rating} />
//                         </div>
//                       </div>
//                     </div>
//                     <p className="mt-4 text-gray-700">{testimonial?.content}</p>
//                   </blockquote>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
"use client";

import { SectionTitle } from "@/components/section-title";
import { StarRating } from "@/components/star-rating";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle>What Our Students Say</SectionTitle>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover how TutorConnect has transformed learning experiences for
              students worldwide
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                {/* Quote Icon */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2 shadow-lg">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex justify-between items-center mb-6">
                    <StarRating rating={testimonial?.rating} />
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(testimonial?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {testimonial?.content}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
                      <Image
                        alt={testimonial?.user?.first_name}
                        src={
                          testimonial?.user?.profilePicture ||
                          "/placeholder.svg"
                        }
                        width="48"
                        height="48"
                        className="relative rounded-full object-cover border-2 border-white dark:border-slate-800"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {testimonial?.user?.first_name}{" "}
                        {testimonial?.user?.last_name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial?.user?.role === "student"
                          ? "Student"
                          : "Instructor"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          <div className="h-1 w-10 rounded-full bg-cyan-500/50" />
          <div className="h-1 w-6 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-1 w-6 rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
