import * as z from "zod";
import { ContactFormSchema } from "./schema";

export type ContactFormType = z.infer<typeof ContactFormSchema>;
