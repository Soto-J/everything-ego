import * as z from "zod";

export const INQUIRY_TYPES = [
  { value: "booking", label: "Performance Booking" },
  { value: "collaboration", label: "Collaboration" },
  { value: "press", label: "Press / Media" },
  { value: "general", label: "General" },
] as const;

export type InquiryTypeValue = (typeof INQUIRY_TYPES)[number]["value"];

export const ContactFormSchema = z.object({
  inquiryType: z.enum(
    ["booking", "collaboration", "press", "general"] as const,
    { required_error: "Please select an inquiry type." },
  ),
  firstName: z.string().min(1, "Field cannot be empty."),
  lastName: z.string().min(1, "Field cannot be empty."),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  message: z.string().min(1, "Field cannot be empty."),
  subscribe: z.boolean().nullable(),
});
