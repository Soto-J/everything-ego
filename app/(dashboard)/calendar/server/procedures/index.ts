import { createTRPCRouter } from "@/lib/trpc/init";

import { createScheduleProcedure } from "./create-schedule";
import { deleteScheduleProcedure } from "./delete-schedule";
import { editScheduleProcedure } from "./edit-schedule";
import { getManyScheduleProcedure } from "./get-many-schedule";

export const calendarRouter = createTRPCRouter({
  createSchedule: createScheduleProcedure,
  deleteSchedule: deleteScheduleProcedure,
  editSchedule: editScheduleProcedure,
  getManySchedule: getManyScheduleProcedure,
});
