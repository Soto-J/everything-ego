import * as z from "zod/v4";
import { ContactFormSchema } from "./schema";

export type ContactFormType = z.infer<typeof ContactFormSchema>;
