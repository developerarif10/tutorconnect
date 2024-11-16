import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as z from "zod";
// import axios from "axios";
import { createTestmonial } from "@/app/actions/testimonial";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const formSchema = z.object({
  rating: z.coerce
    .number()
    .min(1, {
      message: "Rating can be 1 to 5",
    })
    .max(5, {
      message: "Rating can be 1 to 5",
    }),
  review: z.string().min(1, {
    message: "Description is required!",
  }),
});
export const ReviewModal = ({ open, setOpen, courseId, userId }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: "",
      review: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("content", values.review);
      formData.append("courseId", courseId);
      formData.append("rating", values.rating);
      formData.append("user", userId);

      const testimonial = await createTestmonial(formData);
      toast.success("Review added");
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        className="overflow-y-auto max-h-[90vh]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            {/* rating */}
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Give Review</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 5"
                      {...field}
                      type="number"
                      min={1}
                      max={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* review */}
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Write a brief overview about the course</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Course review"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    Write a brief overview about the course
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>

              <Button type="submit" disabled={isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
