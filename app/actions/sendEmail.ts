"use server";

import { ContactFormType } from "@/app/(dashboard)/contact/types";

import { resend } from "../../lib/resend";

// const MY_EMAIL = "soto.ja415@gmail.com";
const MY_EMAIL = "info@everythingego.com";

export async function sendEmail(data: ContactFormType) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: MY_EMAIL,
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
}
