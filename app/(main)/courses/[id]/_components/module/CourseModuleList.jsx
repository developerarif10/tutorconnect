import Loading from "@/app/loading";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock } from "lucide-react";
import { Suspense } from "react";
import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({ module }) => {
  // Calculate total duration safely
  const totalDuration =
    module?.lessonIds?.reduce((acc, obj) => acc + (obj?.duration || 0), 0) || 0;
  const hours = (totalDuration / 3660).toPrecision(2);
  const lessonCount = module?.lessonIds?.length || 0;

  return (
    <AccordionItem
      value={`module-${module?.index || 0}`}
      className="border rounded-lg overflow-hidden"
    >
      <AccordionTrigger className="hover:no-underline px-6 py-4 bg-slate-50">
        <div className="flex flex-1 items-center justify-between flex-wrap gap-2">
          <span className="font-medium text-left">
            {module?.title || "Untitled Module"}
          </span>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            <span>{hours} Hours</span>
            <span className="text-slate-400">•</span>
            <span>{lessonCount} Lessons</span>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <div className="p-4 space-y-2">
          <Suspense fallback={<Loading />}>
            {module?.lessonIds && module.lessonIds.length > 0 ? (
              module.lessonIds.map((lessonId, index) => (
                <CourseLessonList
                  key={lessonId.index || index}
                  lessonId={lessonId}
                />
              ))
            ) : (
              <p className="text-center text-slate-500 py-4">
                No lessons available in this module.
              </p>
            )}
          </Suspense>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseModuleList;
