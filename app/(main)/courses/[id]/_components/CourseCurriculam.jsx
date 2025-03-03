import { Accordion } from "@/components/ui/accordion";
import { BookCheck, Clock10 } from "lucide-react";
import CourseModuleList from "./module/CourseModuleList";

const CourseCurriculam = ({ course }) => {
  const totalDuration = course?.modules
    .map((item) => {
      return item.lessonIds.reduce((acc, obj) => acc + obj.duration, 0);
    })
    .reduce((acc, obj) => acc + obj, 0);

  const hours = (totalDuration / 3660).toPrecision(2);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-slate-50 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
            <BookCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Chapters</p>
            <p className="font-semibold">{course?.modules?.length || 0}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
            <Clock10 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Duration</p>
            <p className="font-semibold">{hours} Hours</p>
          </div>
        </div>
      </div>

      <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
        <Accordion
          type="multiple"
          defaultValue={course?.modules?.map((_, i) => `module-${i + 1}`)}
          className="w-full"
        >
          {course?.modules?.map((module) => (
            <CourseModuleList key={module.index} module={module} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseCurriculam;
