"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Field cannot be empty."),
  lastName: z.string().min(1, "Field cannot be empty."),
  email: z.email(),
  phoneNumber: z.string(),
  message: z.string(),
  subscribe: z.boolean().nullable(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      subscribe: null,
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {};

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="border-primary mx-auto max-w-2xl space-y-4 rounded border p-4"
    >
      <Controller
        name="firstName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name} className="text-lg capitalize">
              {field.name}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="John"
            />
          </Field>
        )}
      />

      <Controller
        name="lastName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name} className="text-lg capitalize">
              {field.name}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Smith"
            />
          </Field>
        )}
      />

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name} className="text-lg capitalize">
              {field.name}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="johnsmith@example.com"
            />
          </Field>
        )}
      />

      <Controller
        name="phoneNumber"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name} className="text-lg capitalize">
              {field.name}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="(999) 999 - 9999"
            />
          </Field>
        )}
      />

      <Controller
        name="subscribe"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field orientation="horizontal">
            <FieldLabel htmlFor={field.name} className="text-lg capitalize">
              {field.name}
            </FieldLabel>

            <Checkbox
              id={field.name}
              name={field.name}
              checked={field.value ?? false}
              onCheckedChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />
          </Field>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel className="text-lg capitalize">{field.name}</FieldLabel>

            <Textarea
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="(999) 999 - 9999"
            />
          </Field>
        )}
      />
    </form>
  );
}
