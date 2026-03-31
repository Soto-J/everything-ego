import { HydrateClient } from "@/lib/trpc/components/server";
import CalendarView from "./ui/view/calendar-view";

export default function CalendarPage() {
  return (
    <HydrateClient>
      <CalendarView />
    </HydrateClient>
  );
}
