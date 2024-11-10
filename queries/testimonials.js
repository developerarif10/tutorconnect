import { replaceMongoIdInArray } from "@/lib/convertData";
import { OverallReviews } from "@/model/overall_reviews";
import { Testimonial } from "@/model/testimonial-model";

export async function getTestimonialsForCourse(courseId) {
  const testimonials = await Testimonial.find({ courseId: courseId }).lean();
  return replaceMongoIdInArray(testimonials);
}

export async function getOverallReviews() {
  const overAllReviews = await OverallReviews.find().lean();
  return replaceMongoIdInArray(overAllReviews);
}
