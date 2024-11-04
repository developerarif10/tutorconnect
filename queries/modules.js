/* eslint-disable @next/next/no-assign-module-variable */
import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/model/lesson.model";
import { Module } from "@/model/module.model";
import dbConnect from "@/service/mongo";

export async function create(moduleData) {
  try {
    await dbConnect();

    const module = await Module.create(moduleData);
    return JSON.parse(JSON.stringify(module));
  } catch (e) {
    throw new Error(e);
  }
}

export async function getModule(moduleId) {
  try {
    await dbConnect();

    const module = await Module.findById(moduleId)
      .populate({
        path: "lessonIds",
        model: Lesson,
      })
      .lean();
    return replaceMongoIdInObject(module);
  } catch (e) {
    throw new Error(e);
  }
}

export async function getModuleBySlug(moduleSlug) {
  try {
    await dbConnect();

    const module = await Module.findOne({ slug: moduleSlug }).lean();
    return replaceMongoIdInObject(module);
  } catch (err) {
    throw new Error(err);
  }
}
