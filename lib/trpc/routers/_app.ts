import { createTRPCRouter } from "../init";
import { calendarRouter } from "@/app/(dashboard)/calendar/server/procedures";

export const appRouter = createTRPCRouter({
  calendar: calendarRouter,
});

export type AppRouter = typeof appRouter;
