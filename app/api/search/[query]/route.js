import { getSearchedCourses } from "@/queries/courses";
import dbConnect from "@/service/mongo";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { query } }) => {
  const { searchParams } = new URL(request.url);
  await dbConnect();

  // Validate the query parameter
  if (!query || query.trim() === "") {
    return NextResponse.json(
      { error: "Query parameter is required." },
      { status: 400 }
    );
  }

  try {
    const courses = await getSearchedCourses(query);
    return NextResponse.json({ courses }, { status: 200 });
  } catch (error) {
    // Improved error handling
    return NextResponse.json(
      { error: "An error occurred while fetching courses." },
      { status: 500 }
    );
  }
};
