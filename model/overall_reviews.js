import mongoose, { Schema } from "mongoose";

const overallReviewsSchema = new Schema({
  quote: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  title: {
    required: false,
    type: String,
  },
  img: {
    required: false,
    type: String,
  },
});

export const OverallReviews =
  mongoose.models.OverallReviews ??
  mongoose.model("OverallReviews", overallReviewsSchema);
