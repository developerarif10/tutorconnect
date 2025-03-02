"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Camera,
  Code,
  Megaphone,
  Music,
  Palette,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design",
    description: "Unleash your creativity",
    color: "from-pink-500 to-rose-500",
    href: "/categories/design",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Build innovative solutions",
    color: "from-violet-500 to-purple-500",
    href: "/categories/development",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Marketing",
    description: "Craft winning strategies",
    color: "from-orange-500 to-red-500",
    href: "/categories/marketing",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "IT & Software",
    description: "Empower through technology",
    color: "from-cyan-500 to-blue-500",
    href: "/categories/it-software",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personal Development",
    description: "Achieve your true potential",
    color: "from-green-500 to-emerald-500",
    href: "/categories/personal-development",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Business",
    description: "Grow your entrepreneurial skills",
    color: "from-amber-500 to-yellow-500",
    href: "/categories/business",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photography",
    description: "Capture life's moments",
    color: "from-indigo-500 to-blue-500",
    href: "/categories/photography",
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Music",
    description: "Master the art of sound",
    color: "from-fuchsia-500 to-pink-500",
    href: "/categories/music",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Categories() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Explore Categories
          </h2>
          <Link
            href="/categories"
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium flex items-center gap-2"
          >
            Browse All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={category.href}>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 h-full transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 dark:group-hover:opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      "--tw-gradient-from": "#ef4444",
                      "--tw-gradient-to": "#3b82f6",
                    }}
                  />

                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 dark:bg-opacity-20 mb-4`}
                  >
                    <div className="text-white">{category.icon}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {category.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>

                  <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 dark:text-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
