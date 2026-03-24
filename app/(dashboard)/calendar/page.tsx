"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <h2>Calendar Page</h2>

      <Card className="mx-auto w-fit rounded-lg p-0 shadow">
        <CardContent className="p-0">
          <Calendar
            mode="single"
            selected={date}
            numberOfMonths={1}
            onSelect={setDate}
            className={cn(
              "rounded-lg border",
              "[--cell-size:--spacing(12)] md:[--cell-size:--spacing(24)] lg:[--cell-size:--spacing(32)]",
            )}
            formatters={{}}
            components={{
              Day: ({ children, ...props }) => {
                return <td className="">{children}</td>;
              },
              DayButton: ({ children, modifiers, day, ...props }) => {
                return (
                  <CalendarDayButton
                    day={day}
                    modifiers={modifiers}
                    className="border-border items-start justify-start border p-2 [&>span]:text-base"
                  >
                    <span>{children}</span>
                    <div>Testing</div>
                  </CalendarDayButton>
                );
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
