import { HydrateClient, prefetch, trpc } from "@/lib/trpc/components/server";

import CalendarView from "./ui/view/calendar-view";

export default function CalendarPage() {
  prefetch(trpc.calendar.getManySchedule.queryOptions());

  return (
    <HydrateClient>
      <CalendarView />
    </HydrateClient>
  );
}
