"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ContactFormSchema } from "../types/schema";
import type { ContactFormType } from "../types";

import FieldErrorMessage from "@/components/field-error-message";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { sendEmail } from "@/app/actions/sendEmail";

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

  return (
    <form
      autoComplete="off"
      onSubmit={form.handleSubmit(onSubmit)}
      className="border-primary rounded border-2 p-4 shadow"
    >
      <FieldSet>
        <FieldGroup className="">
          <Field orientation="horizontal" className="items-start">
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-lg capitalize"
                  >
                    {field.name}
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="John"
                    // className="border-primary"
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
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-lg capitalize"
                  >
                    {field.name}
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Smith"
                    // className="border-primary focus:border-primary"
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
              <Field data-invalid={fieldState.invalid} className="">
                <FieldLabel htmlFor={field.name} className="text-lg capitalize">
                  {field.name}
                </FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="johnsmith@example.com"
                  // className="border-primary focus:border-primary"
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
                <FieldLabel htmlFor={field.name} className="text-lg capitalize">
                  Phone Number
                </FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="(999) 999 - 9999"
                  className="border-primary"
                />

                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Controller
            name="subscribe"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="pt-2">
                <FieldDescription className="font-semibold">
                  Would you like to join our email list?
                </FieldDescription>

                <div className="flex items-center gap-4">
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-lg capitalize"
                  >
                    {field.name}
                  </FieldLabel>

                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    className="border-primary"
                  />
                </div>
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-lg capitalize">
                  {field.name}
                </FieldLabel>

                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Your message..."
                  className="border-primary"
                />

                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          size="lg"
          className="mt-4 ml-auto w-fit rounded font-semibold"
        >
          Submit
        </Button>
      </FieldSet>
    </form>
  );
}
