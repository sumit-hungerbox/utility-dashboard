import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const page = () => {
  return (
    <ScrollArea className="h-full">
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:px-4 ">Hello</div>
      </div>
    </ScrollArea>
  );
};

export default page;
