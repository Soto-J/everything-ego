"use client";

import { useState } from "react";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { authClient } from "@/lib/auth/auth-client";

import FieldErrorMessage from "@/components/field-error-message";

import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function SignInView() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIspending] = useState(false);

  const signInFormSchema = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setError(null);
    setIspending(true);

    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          toast.success("Login successful!");
          setIspending(false);
        },
        onError: ({ error }) => {
          toast.error("Login Failed!");
          setIspending(false);
          setError(error.message);
        },
      },
    );
  };

  const onSocialSubmit = () => {
    setError(null);
    setIspending(true);

    authClient.signIn.social(
      { provider: "google", callbackURL: "/" },
      {
        onSuccess: () => {
          setIspending(false);
          setError(null);
        },
        onError: ({ error }) => {
          setIspending(false);
          setError(error.message);
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="w-xl shadow">
        <CardContent>
          <form
            onSubmit={signInFormSchema.handleSubmit(onSubmit)}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back ÉGO!</h1>
                <p className="text-muted-foreground font-semibold text-balance">
                  Login to your account
                </p>
              </div>

              <Controller
                control={signInFormSchema.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-medium capitalize"
                    >
                      {field.name}
                    </FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="johnsmith@example.com"
                      className="border-primary font-medium"
                    />

                    <FieldErrorMessage error={fieldState.error} />
                  </Field>
                )}
              />

              <Controller
                control={signInFormSchema.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field className="space-y-1">
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-medium capitalize"
                    >
                      {field.name}
                    </FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      type="password"
                      placeholder="********"
                      className="border-primary font-medium"
                    />

                    <FieldErrorMessage error={fieldState.error} />
                  </Field>
                )}
              />

              {/* {!!error && (
                <Alert className="bg-destructive/10 border-none">
                  <OctagonAlertIcon className="!text-destructive h-4 w-4" />
                  <AlertTitle className="text-red-600">
                    Error: {error}
                  </AlertTitle>
                </Alert>
              )} */}

              <Button
                type="submit"
                disabled={isPending}
                className="bg-primary w-full"
              >
                Sign in
              </Button>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>

              <Button
                onClick={() => onSocialSubmit()}
                disabled={isPending}
                variant="outline"
                type="button"
                className="w-full"
              >
                {/* <FaGoogle />  */} icon
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="hover:text-primary underline underline-offset-4"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
