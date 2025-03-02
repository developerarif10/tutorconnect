"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroLeftContent() {
  const { data: session } = useSession();
  return (
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
          <Link href="/register/instructor" className="w-full sm:w-auto">
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
  );
}
