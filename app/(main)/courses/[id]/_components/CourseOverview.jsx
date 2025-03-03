import { CheckCircle } from "lucide-react";

const CourseOverview = ({ course }) => {
  return (
    <div className="py-6 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">About Course</h2>
        <p className="text-slate-600 leading-relaxed">
          {course?.description || "No description available."}
        </p>
      </div>

      {course?.learning && course.learning.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-6">What will you Learn?</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {course.learning.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;
