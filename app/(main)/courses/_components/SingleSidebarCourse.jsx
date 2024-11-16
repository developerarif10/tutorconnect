import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import {
  Award,
  CalendarDays,
  Clock,
  Languages,
  Play,
  Share2,
  SignalHigh,
} from "lucide-react";
import Link from "next/link";

export default function SingleSidebarCourse({ course }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <div>
        <video width="320" height="240" preload="none">
          <source src="https://youtu.be/eroWCJodVa8" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-5">
        <div className="flex gap-2 my-2 justify-start items-baseline">
          <span>
            <strike>{formatPrice(10000)}</strike>
          </span>
          <span className="text-2xl font-bold">
            {formatPrice(course?.price)}
          </span>
        </div>

        <Button
          href=""
          className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enroll Now
        </Button>
        <div className="text-center my-3">
          <span className="text-sm text-gray-400">
            30-Day Money-Back Guarantee
          </span>
        </div>
        <div className="my-4">
          <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <p className="font-semibold">This course includes:</p>

            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Play />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Lectures
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      40
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Clock />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Duration
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      4h 50m
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <SignalHigh />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Skill Level
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Beginner
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Languages />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Language
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      English
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CalendarDays />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Deadline
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      30 Nov 2024
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Award />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Certificate
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      Yes
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <Link
                      href="#"
                      className="flex-1 min-w-0 m-0 ms-4 text-blue-600"
                    >
                      <p className="flex items-center gap-1 text-sm font-medium dark:text-white">
                        <Share2 />
                        Share this course
                      </p>
                    </Link>
                    <div className="inline-flex items-center text-sm font-semibold text-green-600 underline cursor-pointer dark:text-white">
                      Apply coupon
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div>
                    <label
                      for="hs-trailing-button-add-on-with-icon-and-button"
                      className="sr-only"
                    >
                      Label
                    </label>
                    <div className="relative flex rounded-lg shadow-sm">
                      <input
                        type="text"
                        id="hs-trailing-button-add-on-with-icon-and-button"
                        name="hs-trailing-button-add-on-with-icon-and-button"
                        placeholder="Enter coupon code"
                        className="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"></div>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
