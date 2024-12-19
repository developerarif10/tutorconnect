"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, PlusCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import * as z from "zod";

import { updateCourse } from "@/app/actions/course";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  learning: z.array(
    z.object({
      point: z.string().min(1, { message: "Learning point is required" }),
    })
  ),
});

export const LearningForm = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learning: initialData?.learning?.map((point) => ({
        point: point,
      })) || [{ point: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "learning",
    control: form.control,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const learning = values.learning.map((item) => item.point);
      await updateCourse(courseId, { learning });
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        What you&apos;ll learn
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit learning points
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={cn(
            "text-sm mt-2",
            !initialData?.learning?.length && "text-slate-500 italic"
          )}
        >
          {!initialData?.learning?.length && "No learning points"}
          <ul className="list-disc pl-4">
            {initialData?.learning?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-x-2">
                <FormField
                  control={form.control}
                  name={`learning.${index}.point`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={`Learning point ${index + 1}`}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  variant="ghost"
                  disabled={fields.length === 1}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => append({ point: "" })}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add learning point
            </Button>
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
