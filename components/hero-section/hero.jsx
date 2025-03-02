import { Navbar } from "@/app/dashboard/_components/navbar";
import { Award, BookOpen, Users } from "lucide-react";

import PopularCourses from "../popular-courses";
import HeroLeftContent from "./hero-left-content";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
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

            <HeroLeftContent />

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
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>

              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                <PopularCourses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
