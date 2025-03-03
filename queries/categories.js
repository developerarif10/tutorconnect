import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { Category } from "@/model/category-model";
import dbConnect from "@/service/mongo";

export async function getCategories() {
  await dbConnect();
  const categories = await Category.find({}).lean();
  return replaceMongoIdInArray(categories);
}

export async function getCategoryDetails(categoryId) {
  try {
    await dbConnect();
    const category = await Category.findById(categoryId).lean();
    return replaceMongoIdInObject(category);
  } catch (error) {
    throw new Error(error);
  }
}
