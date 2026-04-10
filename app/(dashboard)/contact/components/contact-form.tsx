"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ArrowRightIcon, CircleNotchIcon } from "@phosphor-icons/react";

import { cn, formatPhone } from "@/lib/utils";

import { ContactFormSchema, INQUIRY_TYPES } from "../types/schema";
import type { ContactFormType } from "../types";

import { sendEmail } from "@/app/actions/sendEmail";

import FieldErrorMessage from "@/components/field-error-message";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

type SubmitStatus = "idle" | "success" | "error";

const inputClass =
  "border-0 border-b border-input px-0 h-10 focus-visible:ring-0 focus-visible:border-foreground aria-invalid:ring-0 aria-invalid:border-destructive placeholder:text-muted-foreground/70";

const textareaClass =
  "border-0 border-b border-input px-0 py-2 focus-visible:ring-0 focus-visible:border-foreground aria-invalid:ring-0 aria-invalid:border-destructive min-h-28 resize-none placeholder:text-muted-foreground/70";

const labelClass =
  "font-semibold tracking-widest text-muted-foreground uppercase";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

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

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactFormType) => {
    try {
      await sendEmail(data);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="w-full max-w-lg py-10">
        <p className="text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
          Message Received
        </p>
        <h2 className="mb-4 text-3xl font-light tracking-wide">Thank you.</h2>
        <div className="bg-foreground/20 mb-6 h-px w-16" />
        <p className="text-muted-foreground leading-relaxed">
          We'll review your message and be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      autoComplete="off"
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-lg"
    >
      <FieldSet>
        <FieldGroup className="gap-7">
          <Controller
            name="inquiryType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className={labelClass}>Inquiry Type</FieldLabel>
                <div className="flex flex-wrap gap-2 pt-1">
                  {INQUIRY_TYPES.map(({ value, label }) => (
                    <Button
                      key={value}
                      variant="outline"
                      type="button"
                      onClick={() => field.onChange(value)}
                      className={cn(
                        "cursor-pointer border px-3 py-1.5 text-xs tracking-widest uppercase transition-colors",
                        field.value === value
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                      )}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Field orientation="horizontal" className="items-start gap-6">
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
                    className={inputClass}
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
                    className={inputClass}
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
                  className={inputClass}
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
                  Phone{" "}
                  <span className="text-muted-foreground/50 tracking-normal normal-case">
                    — optional
                  </span>
                </FieldLabel>
                <Input
                  {...field}
                  type="tel"
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="(999) 999 - 9999"
                  className={inputClass}
                  onChange={(e) => field.onChange(formatPhone(e.target.value))}
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
                  className={textareaClass}
                />
                <FieldErrorMessage error={fieldState.error} />
              </Field>
            )}
          />

          <Controller
            name="subscribe"
            control={form.control}
            render={({ field }) => (
              <div className="border-border flex items-center justify-between border-t pt-5">
                <div>
                  <p className={labelClass}>Join the email list</p>
                  <p className="text-muted-foreground font-lightq mt-0.5">
                    Stay updated on performances and events!
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

        <div className="mt-8 flex items-center justify-between">
          {submitStatus === "error" && (
            <p className="text-destructive text-xs">
              Something went wrong. Please try again.
            </p>
          )}
          <div className="ml-auto">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="gap-2.5 tracking-widest uppercase"
            >
              {isSubmitting ? (
                <>
                  <CircleNotchIcon className="size-3.5 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRightIcon className="size-3.5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </FieldSet>
    </form>
  );
}
