import { auth } from "@/auth";
import { User } from "@/model/user-model";
import dbConnect from "@/service/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return new NextResponse("No image provided", { status: 400 });
    }

    // Validate file size (2MB)
    const fileSize = image.size;
    if (fileSize > 2 * 1024 * 1024) {
      return new NextResponse("File size too large. Maximum size is 2MB", {
        status: 400,
      });
    }

    // Validate file type
    const fileType = image.type;
    if (!fileType.startsWith("image/")) {
      return new NextResponse("Invalid file type. Please upload an image", {
        status: 400,
      });
    }

    // Convert the file to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString(
      "base64"
    )}`;

    await dbConnect();

    // Update the user's profile picture using the User model
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { profilePicture: base64Image },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Profile picture updated successfully",
    });
  } catch (error) {
    console.error("PROFILE_PICTURE_UPLOAD_ERROR:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: 500,
    });
  }
}
