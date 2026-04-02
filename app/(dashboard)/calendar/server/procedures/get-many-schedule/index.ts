import { baseProcedure } from "@/lib/trpc/init";

import { db } from "@/db";
import { type ScheduleTable, scheduleTableSchema } from "@/db/schemas/schedule";

export const getManyScheduleProcedure = baseProcedure.query(async () => {
  const rows = await db.select().from(scheduleTableSchema);

  return rows.reduce<Record<string, ScheduleTable[]>>((acc, item) => {
    const key = item.date.toISOString().split("T")[0];
    (acc[key] ??= []).push(item);

    return acc;
  }, {});
});
