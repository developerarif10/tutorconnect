import { replaceMongoIdInArray } from "@/lib/convertData";
import { OverallReviews } from "@/model/overall_reviews";
import { Testimonial } from "@/model/testimonial-model";
import dbConnect from "@/service/mongo";

export async function getTestimonialsForCourse(courseId) {
  await dbConnect();
  const testimonials = await Testimonial.find({ courseId: courseId }).lean();
  return replaceMongoIdInArray(testimonials);
}

export async function getOverallReviews() {
  try {
    await dbConnect();

    const overAllReviews = await OverallReviews.find().lean();
    return replaceMongoIdInArray(overAllReviews);
  } catch (err) {
    console.error("Error fetching overall reviews:", err);
    throw err;
  }
}

export async function create(testimonialData) {
  try {
    await dbConnect();

    const testimonial = await Testimonial.create(testimonialData);
    return JSON.parse(JSON.stringify(testimonial));
  } catch (err) {
    throw new Error(err);
  }
}
