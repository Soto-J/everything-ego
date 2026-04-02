"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { useTRPC } from "@/lib/trpc/components/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const LOCATIONS = [
  { title: "Carle Shurz", color: "bg-green-500" },
  { title: "Central Park", color: "bg-blue-500" },
  { title: "MTA Music Under New York", color: "bg-pink-500" },
  { title: "Private Event", color: "bg-red-500" },
  { title: "Public Performance", color: "bg-orange-500" },
  { title: "Recital", color: "bg-yellow-500" },
];

export default function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const trpc = useTRPC();
  const { data: schedule } = useSuspenseQuery(
    trpc.calendar.getManySchedule.queryOptions(),
  );
  return (
    <div>
      <Card className="mx-auto w-fit max-w-6xl rounded-lg p-0 shadow" size="sm">
        <CardContent className="">
          <Calendar
            mode="single"
            numberOfMonths={1}
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            className={cn(
              "p-0 [--cell-size:--spacing(12)] md:[--cell-size:--spacing(24)] lg:[--cell-size:--spacing(32)]",
            )}
            classNames={{
              caption_label:
                "flex items-center gap-1 font-bold text-lg [&>svg]:size-3.5",
              month_caption:
                "flex h-10 w-full items-center justify-center px-(--cell-size)",
              button_previous: "size-10 flex items-center justify-center",
              button_next: "size-10 flex items-center justify-center",
              weekday: "flex-1 font-semibold tracking-widest text-sm",
            }}
            formatters={{
              formatWeekdayName: (date) =>
                date.toLocaleString("en-US", { weekday: "short" }),
            }}
            components={{
              DayButton: ({ children, modifiers, day, ...props }) => (
                <CalendarDayButton
                  {...props}
                  day={day}
                  modifiers={modifiers}
                  className={cn(
                    "border-border items-start justify-start border p-2 [&>span]:text-base",
                    props.className,
                  )}
                >
                  <span>{children}</span>
                  {/* <div>
                    {Object.entries(schedule).map((event) => (
                      <div>{event}</div>
                    ))}
                  </div> */}
                </CalendarDayButton>
              ),
            }}
          />
        </CardContent>

        <CardFooter className="flex flex-wrap gap-x-4 gap-y-2">
          {LOCATIONS.map((location) => (
            <div key={location.title} className="flex items-center gap-1.5">
              <span
                className={cn("size-2.5 shrink-0 rounded-full", location.color)}
              />
              <span className="text-muted-foreground font-semibold">
                {location.title}
              </span>
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
