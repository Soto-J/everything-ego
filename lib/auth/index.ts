import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { admin } from "better-auth/plugins";
import { adminClient } from "better-auth/client/plugins";

import * as dbSchema from "@/db/schemas";
import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: { ...dbSchema },
  }),

  emailAndPassword: { enabled: true },

  // socialProviders: {
  //   google: {
  //     clientId: "",
  //     clientSecret: "",
  //   },
  // },
  plugins: [admin(), adminClient()],
});
