import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">
        Frequently Asked Questions: We're Here to Help
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* First Column */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  What types of courses do you offer?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We offer a wide range of courses including programming, design,
                business, marketing, and personal development. Our courses are
                designed for beginners to advanced learners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  How do I enroll in a course?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Enrolling is easy! Simply browse our course catalog, select the
                course you're interested in, and click the "Enroll Now" button.
                You'll be guided through the payment process and gain immediate
                access to your course materials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  Are the courses self-paced or instructor-led?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We offer both self-paced and instructor-led courses. Self-paced
                courses allow you to learn at your own convenience, while
                instructor-led courses provide structured learning with direct
                guidance and feedback from experts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Second Column */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-4"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  What types of courses do you offer?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We offer a wide range of courses including programming, design,
                business, marketing, and personal development. Our courses are
                designed for beginners to advanced learners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  How do I enroll in a course?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Enrolling is easy! Simply browse our course catalog, select the
                course you're interested in, and click the "Enroll Now" button.
                You'll be guided through the payment process and gain immediate
                access to your course materials.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-blue-50 rounded-md mb-2"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="text-left font-medium">
                  Are the courses self-paced or instructor-led?
                </span>
                <Plus className="h-5 w-5 shrink-0" />
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                We offer both self-paced and instructor-led courses. Self-paced
                courses allow you to learn at your own convenience, while
                instructor-led courses provide structured learning with direct
                guidance and feedback from experts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
