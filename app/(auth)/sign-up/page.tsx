import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import SignUpView from "./ui/view/sign-up-view";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) redirect("/");

  return <SignUpView />;
}
