import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { admin } from "better-auth/plugins";
import { adminClient } from "better-auth/client/plugins";

import env from "@/env";

import * as dbSchema from "@/db/schemas";
import { db } from "@/db";

export const auth = betterAuth({
  baseURL: env.NEXT_APP_URL,
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: { ...dbSchema },
  }),

  emailAndPassword: { enabled: true },

  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [admin(), adminClient()],
});
