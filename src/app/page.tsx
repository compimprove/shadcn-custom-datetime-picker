"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <main className="flex mt-40 flex-col items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP - HH:mm") : <span>Pick a date</span>}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto rounded-lg gap-0">
          <DialogHeader>
            <DialogTitle className="text-center">Pick your date</DialogTitle>
          </DialogHeader>
          <Calendar selected={date} setDate={setDate} initialFocus />
        </DialogContent>
      </Dialog>
    </main>
  );
}
