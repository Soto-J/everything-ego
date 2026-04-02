import { adminProcedure } from "@/lib/trpc/init";

export const createScheduleProcedure = adminProcedure.mutation(
  async ({ ctx, input }) => {},
);
