import { z, ZodError } from "zod";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

const EnvSchema = z.object({
  NEXT_APP_URL: z.string(),
  DB_FILE_NAME: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
});

// expand reads your loaded .env object and replaces variable references (${VAR}) with their actual values.
export type EnvType = z.infer<typeof EnvSchema>;

expand(config());

try {
  EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing required values in .env:\n";

    error.issues.forEach((issue) => {
      const path = String(issue.path[0]);
      message += path + "/n";
    });

    const err = new Error(message);

    err.stack = "";

    throw err;
  } else {
    console.log(error);
  }
}

export default EnvSchema.parse(process.env);
