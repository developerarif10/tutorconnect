"use client";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

function VideoDescription({ description }) {
  return (
    <div className="mt-4">
      <Tabs defaultValue="details">
        <TabsList className="bg-transparent  border-b border-border w-full justify-start h-auto rounded-none">
          Description
        </TabsList>
        <div className="pt-3">
          <TabsContent value="details">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default VideoDescription;
