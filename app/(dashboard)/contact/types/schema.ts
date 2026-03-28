import * as z from "zod";

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, "Field cannot be empty."),
  lastName: z.string().min(1, "Field cannot be empty."),
  email: z.email(),
  phoneNumber: z.string().min(1, "Field cannot be empty."),
  message: z.string().min(1, "Field cannot be empty."),
  subscribe: z.boolean().nullable(),
});
