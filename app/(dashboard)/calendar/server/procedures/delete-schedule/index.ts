import { adminProcedure } from "@/lib/trpc/init";

export const deleteScheduleProcedure = adminProcedure.mutation(
  async ({ ctx, input }) => {},
);
