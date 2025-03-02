"use client";

import { Navbar } from "@/app/dashboard/_components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, BookOpen, Users } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { data: session } = useSession();

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full">
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                Transform Your Learning Journey
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Learning
              </span>{" "}
              Potential
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl">
              Discover a new way to learn with our interactive platform. Explore
              diverse courses designed to inspire, educate, and empower learners
              of all levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {session ? (
                <Link href="/courses" className="w-full sm:w-auto">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full h-12 px-6 text-base lg:text-lg w-full">
                    Explore Courses
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register/student" className="w-full sm:w-auto">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full h-12 px-6 text-base lg:text-lg w-full">
                      Start Learning
                    </Button>
                  </Link>
                  <Link
                    href="/register/instructor"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full h-12 px-6 text-base lg:text-lg border-slate-300 dark:border-slate-700 w-full"
                    >
                      Become An Instructor
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="flex flex-col items-center text-center p-2 md:p-3">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                  <BookOpen className="h-4 w-4 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">
                  500+ Courses
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 md:p-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">
                  50k+ Students
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 md:p-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 md:p-3 rounded-full mb-2 md:mb-3">
                  <Award className="h-4 w-4 md:h-6 md:w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">
                  Expert Tutors
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>

              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
                      Popular Courses
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-600 dark:text-cyan-400"
                    >
                      View All
                    </Button>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                      >
                        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={`/placeholder.svg?height=64&width=64&text=Course ${item}`}
                            alt={`Course ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm md:text-base font-medium text-slate-900 dark:text-white truncate">
                            {item === 1
                              ? "Web Development Masterclass"
                              : item === 2
                              ? "Data Science Fundamentals"
                              : "UX/UI Design Principles"}
                          </h4>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-3 h-3 md:w-4 md:h-4 ${
                                    i < 4
                                      ? "text-yellow-400"
                                      : "text-slate-300 dark:text-slate-600"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                              {item === 1 ? "4.8" : item === 2 ? "4.7" : "4.9"}{" "}
                              (
                              {item === 1
                                ? "2.5k"
                                : item === 2
                                ? "1.8k"
                                : "3.2k"}
                              )
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-sm md:text-base font-medium text-cyan-600 dark:text-cyan-400">
                            $
                            {item === 1
                              ? "49.99"
                              : item === 2
                              ? "39.99"
                              : "59.99"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                          Start learning today
                        </p>
                        <p className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white mt-1">
                          Get 30% off your first course
                        </p>
                      </div>
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full text-sm">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
