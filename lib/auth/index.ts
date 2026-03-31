import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as db from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }),

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: "",
      clientSecret: "",
    },
  },
});
