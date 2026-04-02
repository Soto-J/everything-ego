import { adminProcedure } from "@/lib/trpc/init";

export const editScheduleProcedure = adminProcedure.mutation(
  async ({ ctx, input }) => {},
);
