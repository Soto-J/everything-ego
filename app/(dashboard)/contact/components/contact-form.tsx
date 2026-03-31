"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ContactFormSchema } from "../types/schema";
import type { ContactFormType } from "../types";

import { sendEmail } from "@/app/actions/sendEmail";

import FieldErrorMessage from "@/components/field-error-message";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      subscribe: null,
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    await sendEmail(data);
  };

  const labelClass = "text-xs tracking-widest text-muted-foreground uppercase";

  return (
    <form
      autoComplete="off"
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-lg"
    >
      <FieldSet>
        <FieldGroup>
          <Field orientation="horizontal" className="items-start gap-4">
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className={labelClass}>
                    First Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="John"
                  />
                  <FieldErrorMessage error={fieldState.error} />
                </Field>
              )}
            />
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className={labelClass}>
                    Last Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Smith"
                  />
                  <FieldErrorMessage error={fieldState.error} />
                </Field>
              )}
            />
          </Field>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  Email Address
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="johnsmith@example.com"
                />
                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  Phone Number
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="(999) 999 - 9999"
                />
                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className={labelClass}>
                  Message
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Tell us about your event or inquiry..."
                  className="min-h-28 resize-none"
                />
                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Controller
            name="subscribe"
            control={form.control}
            render={({ field }) => (
              <div className="border-border flex items-center justify-between border-t pt-4">
                <div>
                  <p className={labelClass}>Join the email list</p>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Stay updated on performances and events
                  </p>
                </div>
                <Checkbox
                  id={field.name}
                  name={field.name}
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                />
              </div>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          size="lg"
          className="mt-6 w-full rounded tracking-widest uppercase"
        >
          Send Message
        </Button>
      </FieldSet>
    </form>
  );
}
