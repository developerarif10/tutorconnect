import { cn } from "@/lib/utils";
import { getLesson } from "@/queries/lessons";
import { Play } from "lucide-react";

const CourseLessonList = async ({ lessonId }) => {
  const lesson = await getLesson(lessonId);

  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-between w-full p-3 rounded-lg",
        "transition-all duration-200",
        "hover:bg-slate-50 active:bg-slate-100",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
          <Play className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium text-slate-700 text-left">
          {lesson?.title || "Untitled Lesson"}
        </span>
      </div>
      {lesson?.duration && (
        <span className="text-xs text-slate-500">
          {Math.floor((lesson.duration || 0) / 60)} min
        </span>
      )}
    </button>
  );
};

export default CourseLessonList;
