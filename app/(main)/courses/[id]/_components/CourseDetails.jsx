import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatMyDate } from "@/lib/date";
import {
  BookA,
  Clock,
  GraduationCap,
  Share2,
  ShieldCheck,
  SignalHigh,
  Target,
} from "lucide-react";
import Image from "next/image";
import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";
import CourseOverview from "./CourseOverview";

const CourseDetails = ({ course }) => {
  const lastModifiedDate = formatMyDate(course?.modifiedOn);
  const originalPrice = course?.originalPrice || "₹10,000.00";
  const discountedPrice = course?.price || "₹13,000.00";

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {course?.category?.title || "IT & Software"}
              </span>

              <h1 className="text-2xl sm:text-3xl font-bold">
                {course?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={
                      course?.instructor?.profilePicture || "/placeholder.svg"
                    }
                    alt={course?.instructor?.firstName}
                    className="rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-medium">Teacher</p>
                    <p className="text-muted-foreground">
                      {course?.instructor?.firstName}{" "}
                      {course?.instructor?.lastName}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-muted-foreground">
                    {course?.category?.title}
                  </p>
                </div>

                <div>
                  <p className="font-medium">Last updated</p>
                  <p className="text-muted-foreground">{lastModifiedDate}</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start h-12 bg-transparent p-0 border-b overflow-x-auto">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6"
                >
                  Course Info
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="instructor"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6"
                >
                  Instructor
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <CourseOverview course={course} />
              </TabsContent>
              <TabsContent value="curriculum">
                <CourseCurriculam course={course} />
              </TabsContent>
              <TabsContent value="instructor">
                <CourseInstructor course={course} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Info Card - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl border bg-card shadow-sm overflow-hidden">
              {/* Video Preview */}
              <div className="relative aspect-video bg-muted">
                {/* <Image
                  src={course?.thumbnail || course?.coverImage}
                  alt={course?.title || "Course preview"}
                  fill
                  className="object-cover opacity-90"
                /> */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-background/90 hover:bg-background transition-colors">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-foreground border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{discountedPrice}</p>
                    <p className="text-sm text-muted-foreground line-through">
                      {originalPrice}
                    </p>
                  </div>
                  <button className="text-primary hover:text-primary/80">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid gap-3">
                  <button className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors">
                    Enroll Now
                  </button>
                  <button className="w-full py-3 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>

                <div className="text-xs text-center text-muted-foreground">
                  30-Day Money-Back Guarantee
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">This course includes:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Lectures
                        </span>
                      </div>
                      <span className="text-sm font-medium">40</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Duration
                        </span>
                      </div>
                      <span className="text-sm font-medium">4h 50m</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <SignalHigh className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Skill Level
                        </span>
                      </div>

                      <span className="text-sm font-medium">Beginner</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <BookA className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Language
                        </span>
                      </div>

                      <span className="text-sm font-medium">English</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Deadline
                        </span>
                      </div>

                      <span className="text-sm font-medium">30 Nov 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Certificate
                        </span>
                      </div>
                      <span className="text-sm font-medium">Yes</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="flex-1 px-3 py-2 text-sm bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium rounded-lg transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
