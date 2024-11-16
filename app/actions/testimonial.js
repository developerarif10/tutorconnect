"use server";
import { create } from "@/queries/testimonials";
export async function createTestmonial(data) {
  try {
    const content = data.get("content");
    const courseId = data.get("courseId");
    const rating = data.get("rating");
    const user = data.get("user");

    if (!content || !courseId || !rating || !user) {
      throw new Error("Missing required fields");
    }

    const testimonialData = {
      content,
      courseId,
      rating: Number(rating),
      user,
    };

    const createdTestmonial = await create(testimonialData);
    return createdTestmonial;
  } catch (error) {
    console.error("Error creating testimonial:", error);
    throw error;
  }
}
